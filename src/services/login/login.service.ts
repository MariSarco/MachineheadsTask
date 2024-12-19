import { LoginRequest } from "./login.service.type";
import { client } from "../client";

export const loginService = {
  login: async (loginRequest: LoginRequest) => {
    try {
      const url: string = "/auth/token-generate";
      const formData = new FormData();
      formData.append("email", loginRequest.email);
      formData.append("password", loginRequest.password);
      const response = await client.post(url, formData);
      return response;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  },
  refreshToken: async (refresh_token: string) => {
    try {
      const url: string = "/auth/token-refresh";
      const formData = new FormData();
      formData.append("refresh_token", refresh_token);
      const response = await client.post(url, formData);
      return response;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  },
};