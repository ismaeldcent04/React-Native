import { getSummaries } from "@/core/summary/actions/get-summaries.action";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useSummaries = () => {
  const summariesQuery = useInfiniteQuery({
    queryKey: ["summary", "infinite"],
    queryFn: ({ pageParam = 1 }) =>
      getSummaries(20, pageParam * 20, 1, 20260122, 20260122),
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => allPages.length,
  });

  return {
    summariesQuery,

    loadNexPage: summariesQuery.fetchNextPage,
  };
};
