import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useGetSingleProduct = (id) => {
  return useQuery({
    queryKey: ["single-product", id],
    queryFn: async () => {
      return await request.get(`/all/${id}`).then((res) => res.data);
    },
  });
};
