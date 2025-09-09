import axiosClient from "./axiosApiClient";
import { ENDPOINTS } from "../../constant/apiConstant";

export const productService = {
    getProduct: async () => await axiosClient.get(ENDPOINTS.PRODUCT.LIST),
    getProductById : async(data : any)=>  await axiosClient.post(ENDPOINTS.PRODUCT.GETPRODUCTBYID , data)

  };