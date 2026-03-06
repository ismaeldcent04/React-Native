import { getSummaries } from "@/core/summary/actions/get-summaries.action";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useSummaries = (startDate: number, endDate: number) => {
  const { user } = useAuthStore();
  const summariesQuery = useInfiniteQuery({
    queryKey: ["summaries", "infinite"],
    queryFn: ({ pageParam = 1 }) =>
      getSummaries(20, pageParam, user?.client, startDate, endDate),
    staleTime: 1000 * 60 * 60,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  return {
    summariesQuery,

    loadNexPage: summariesQuery.fetchNextPage,
  };
};
