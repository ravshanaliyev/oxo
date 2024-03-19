import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useEditProduct = (id) => {
  return useMutation({
    mutationKey: ["products"],
    mutationFn: () => {
      return request.patch(`all/${id}`).then((res) => res.data);
    },
  });
};
