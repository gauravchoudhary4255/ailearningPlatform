import axiosClient from "./axiosApiClient";
import { ENDPOINTS } from "../../constant/apiConstant";

export const authService = {
  login: async (data : any) => await axiosClient.post(ENDPOINTS.AUTH.LOGIN, data)
};