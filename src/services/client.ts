import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

type RequestFunc = (config: AxiosRequestConfig) => Promise<AxiosResponse>;

export const createAuthInterceptor = (): RequestFunc => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer <YOUR_ACCESS_TOKEN>",
  } as AxiosRequestHeaders;

  const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    return { ...config, headers };
  };

  return (config: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.request(onRequest(config)).catch((error: AxiosError) => {
      return Promise.reject(error);
    });
  };
};

const client = axios.create({
  baseURL: "https://rest-test.machineheads.ru",
  timeout: 5 * 60000,
});

client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (config?.headers) {
    const token = Cookies.get("access_token");
    config.headers["Authorization"] = token ? `Bearer ${token}` : "";
  }
  return config;
});

export { client };
