import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus/lib/components/index.js";

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 20000,
});

// 1、请求拦截器
request.interceptors.request.use((coinfig: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
  return coinfig;
});

// 2、响应拦截器
request.interceptors.response.use(
  // 成功的回调
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },

  // 失败的回调
  (error: AxiosError): Promise<AxiosError> => {
    let msg: string = "";
    switch (error.response?.status) {
      case 403:
        msg = "抱歉，无权访问！";
        break;
      case 404:
        msg = "请求错误，路径不正确！";
        break;
      default:
        msg = "网络错误，请稍后再试！";
        break;
    }

    ElMessage({
      message: msg,
      type: "error",
    });

    return Promise.reject(error);
  }
);
