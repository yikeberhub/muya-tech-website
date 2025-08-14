import axioInstance from "./axiosInstance";
import {About,AboutPayload} from "../types/aboutType";
import { promises } from "dns";
import axiosInstance from "./axiosInstance";

//fetch about sections
export const getAboutApi = async (): Promise<About[]>=>{
    const  response = await axiosInstance.get(`/about`);
    return response.data;
}
//add about sections
export const createAboutApi = async (payload:AboutPayload): Promise<About[]>=>{
    const  response = await axiosInstance.post(`/about`);
    return response.data;
}

