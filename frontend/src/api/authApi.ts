import axios from "axios";
import { LoginPayload, RegisterPayload, LoginResponse ,RegisterResponse} from "../types/authTypes";

const API_URL = "/api/auth";

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await axios.post(`${API_URL}/login`, payload);
  return data;
};

export const registerUser = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  const { data } = await axios.post(`${API_URL}/register`, payload);
  return data;
};
