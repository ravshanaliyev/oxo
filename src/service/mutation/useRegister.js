import { useMutation } from "@tanstack/react-query";
import request from "../../config/request";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => {
      return request.post("/users/register", data).then((res) => res.data);
    },
  });
};
