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
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YXBsZUBnbWFpbC5jb20iLCJpYXQiOjE3MTA0NDk3NTYsImV4cCI6MTcxMDQ1MzM1Niwic3ViIjoiMSJ9.Mt5uU56T4q2DvvidQm1PVW-PRdaXpDmk1nzNQOIrpUI`;
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
