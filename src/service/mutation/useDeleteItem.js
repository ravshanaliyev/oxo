import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useDeleteItem = (id) => {
  return useMutation({
    mutationFn: () => {
      return request.delete(`all/${id}`).then((res) => res.data);
    },
  });
};
