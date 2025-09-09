import axios from "axios";

// Create axios instance
const axiosClient = axios.create({
  baseURL:  import.meta.env.VITE_API_URL || "http://localhost:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor → attach token if available
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // in React Native use AsyncStorage
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor → handle errors globally
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
        return error.response
    //    const { status } = error.response;

    //   if (status === 401) {
    //     console.warn("Unauthorized! Redirecting to login...");
    //     localStorage.removeItem("token");
    //     // Optional: redirect to login page
    //     // window.location.href = "/login";
    //   } else if (status >= 500) {
    //     console.error("Server error, try again later.");
    //   }
    }
   
    // return Promise.reject(error);
  }
);

export default axiosClient;