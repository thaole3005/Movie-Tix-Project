import axios from "axios";
import queryString from "query-string";

const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjEyLzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTcyMTYwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjQ5ODY5MjAwfQ.RkFKrifGWTY3MP0bQtIpvA5WpWWrcSkGjDSw01LwhuI';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "content-type": "application/json",
    timeout: 1000,
    "TokenCybersoft": TOKEN_CYBERSOFT,
    // 'Authorization': localStorage.getItem(ACCESS_TOKEN)
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data && response.config.method === "get") {
      const total = Number(response.headers["x-total-count"]);
      return {
        total: total,
        data: response.data,
      };
    }
    if (response && response.data && response.config.method === "post") {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
