import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",

  timeout: 5000,
});

request.interceptors.request.use((config) => {
 
  const token = localStorage.getItem("token");

  if (token) {
    //config.headers.token = token;
  }

  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    console.log(error);

    return Promise.reject(error);
  },
);

export default request;
