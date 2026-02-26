import { View, Text } from "react-native";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecentAuthorizations } from "@/core/autorizations/actions/get-recentAuthorizations";
import { getLastAuthorizations } from "@/core/autorizations/actions/get-lastAuthorization";
import { CodeRequest } from "@/infrastructure/interfaces/code-request";
import { createAuthorizationAction } from "@/core/autorizations/actions/create-authorization";

const useCodes = () => {
  const queryClient = useQueryClient();
  const recentCodesQuery = useQuery({
    queryKey: ["code", "recent"],
    queryFn: () => getRecentAuthorizations(3, 1),
    staleTime: 1000 * 60 * 60,
  });

  const lastCodeQuery = useQuery({
    queryKey: ["code", "last"],
    queryFn: () => getLastAuthorizations(1, 1),
    staleTime: 1000 * 60 * 60,
  });

  const createCodeMutation = useMutation({
    mutationFn: async (data: CodeRequest) => {
      await createAuthorizationAction(data);
    },

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["code", "last"],
      });

      queryClient.invalidateQueries({
        queryKey: ["code", "recent"],
      });
    },
  });

  return {
    recentCodesQuery,
    lastCodeQuery,
    createCodeMutation,
  };
};

export default useCodes;
