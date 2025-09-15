import axiosClient from "./axiosApiClient";
import { ENDPOINTS } from "../../constant/apiConstant";

export const subscriptionServices = {
    buySubscription : async(data : Object)=> await axiosClient.post(ENDPOINTS.SERVICE.BUYSUBSCRIPTION, data),
    getUserSubscription : async()=>await axiosClient.post(ENDPOINTS.SERVICE.SUBSCTIONLIST,{})
}