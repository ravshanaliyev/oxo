import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useGetCategoryItems = (title) => {
  return useQuery({
    queryKey: ["category-items", title],
    queryFn: async () => {
      return await request.get(`/${title}`).then((res) => res.data);
    },
  });
};
