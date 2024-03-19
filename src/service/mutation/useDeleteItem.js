import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useDeleteItem = (category) => {
  return useMutation({
    mutationKey: ["products", "category-items", category],
    mutationFn: (id) => {
      return request
        .delete(category ? `/${category}/${id}` : `all/${id}`)
        .then((res) => res.data);
    },
  });
};
