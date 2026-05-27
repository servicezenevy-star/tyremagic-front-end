import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_API_URL}`,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error intercepted", error);
    const errorObj = {} as unknown;
    if (error.response && error.response.data) {
      errorObj["status"] = error.response.status;
      errorObj["message"] = error.response.data.message;
    } else {
      errorObj["message"] = error.message;
    }
    if (
      error?.response?.status === 403 &&
      errorObj.message === "Access denied. Insufficient permissions."
    ) {
      window.location.href = "/unauthorized";
    }
    return Promise.reject(errorObj);
  },
);
export default api;
