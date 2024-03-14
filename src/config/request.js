import axios from "axios";
import { loadState } from "./load-state";

const user = loadState("user");
const request = axios.create({
  baseURL: "http://localhost:8080",
});

const PostData = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method == "post"
    ) {
      axios
        .post("http://localhost:8080/all", JSON.parse(config.data))
        .then((res) => {
          console.log(res.data);
        });
    }
  }, 500);

  return;
};

request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${user?.token}`;
    PostData(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use((response) => {
  return response.data;
});
export default request;
