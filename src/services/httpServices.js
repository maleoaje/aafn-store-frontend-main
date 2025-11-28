import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const setToken = (token) => {
  // console.log("token", token);
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

const responseBody = (response) => response.data;

// Add error interceptor to handle build-time failures gracefully
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // During build/static generation, if API is unavailable, reject with a clear error
    if (error.code === "ECONNREFUSED" || error.code === "ETIMEDOUT" || !error.response) {
      const buildError = new Error(
        `API request failed: ${error.message || "Connection refused. Backend may not be running."}`
      );
      buildError.code = error.code;
      return Promise.reject(buildError);
    }
    return Promise.reject(error);
  }
);

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),
  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody),
  put: (url, body) => instance.put(url, body).then(responseBody),
};

export default requests;
