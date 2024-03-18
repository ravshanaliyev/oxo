import { useInfiniteQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useInfiniteData = () => {
  return useInfiniteQuery({
    queryKey: ["loopProducts"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) =>
      request
        .get("/all", { params: { _page: pageParam, _limit: 10 } })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam < lastPage.length ? lastPageParam + 1 : undefined;
    },
  });
};
