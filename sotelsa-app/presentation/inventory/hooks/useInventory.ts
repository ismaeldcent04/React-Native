import { getInventory } from "@/core/inventory/actions/get-inventory.action";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useInventory = (product: string) => {
  const { user } = useAuthStore();

  console.log(user);
  const inventoryQuery = useInfiniteQuery({
    queryKey: ["inventory", "infinite", user?.client, product],
    queryFn: ({ pageParam = 1 }) =>
      getInventory(10, pageParam, Number(user?.client), product),
    staleTime: 1000 * 60 * 60,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  return {
    inventoryQuery,
  };
};
