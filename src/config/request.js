import axios from "axios";

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
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyb3NraTEzMzRAbWFpbC5jb20iLCJpYXQiOjE3MTA0ODMwNTMsImV4cCI6MTcxMDQ4NjY1Mywic3ViIjoiNSJ9.cgiQ-hwWUIIawgk3oYRhSUAfhb6lgYLPrWqHqXZmJqo`;
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
