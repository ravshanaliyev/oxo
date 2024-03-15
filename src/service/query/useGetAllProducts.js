import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await request.get("/all").then((res) => res.data);
    },
  });
};
