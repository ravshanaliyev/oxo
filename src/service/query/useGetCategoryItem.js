import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useGetCategoryItem = (category, title) => {
  return useQuery({
    queryKey: ["category-items", category, title],
    queryFn: async () => {
      return await request.get(`/${category}/${title}`).then((res) => res.data);
    },
  });
};
