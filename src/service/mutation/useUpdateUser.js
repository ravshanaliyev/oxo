import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useUpdateUser = (id) => {
  return useMutation({
    mutationFn: (data) => {
      return request.patch(`/users/${id}`, data).then((res) => res.data);
    },
  });
};
