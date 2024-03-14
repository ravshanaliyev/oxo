import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useCreateProduct = (name) => {
  return useMutation({
    mutationKey: ["createProduct", name],
    mutationFn: (data) => {
      return request.post(`/${name}`, data).then((res) => res.data);
    },
  });
};
