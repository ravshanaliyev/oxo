import { useQuery } from "@tanstack/react-query";
import request from "../../config/request";

const useSearch = (title = "") => {
  return useQuery({
    queryKey: ["searchItems", title],
    queryFn: async () =>
      request
        .get("/all", { params: { title_like: title } })
        .then((res) => res.data),
  });
};

export default useSearch;
