import axiosClient from "./axiosApiClient";
import { ENDPOINTS } from "../../constant/apiConstant";


const aiAgentServices = {
    aiAgentApi  :async(data: any)=> await axiosClient.post(ENDPOINTS.AIAGENT.AGENTENDPOINT,data) 
}

export default aiAgentServices;