import { getSummaryById } from "@/core/summary/actions/get-summary-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useSummary = (summaryId: number) => {
  const summaryQuery = useQuery({
    queryKey: ["summary", summaryId],
    queryFn: () => getSummaryById(summaryId),
    staleTime: 1000 * 60 * 60,
  });

  return {
    summaryQuery,
  };
};
