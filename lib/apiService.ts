// lib/apiService.ts
import api from "./apiClient";
import { AxiosRequestConfig, AxiosResponse } from "axios";

type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

const apiService = {
  get<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return api.get<T>(url, { ...config, params });
  },

  post<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return api.post<T>(url, data, config);
  },

  put<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return api.put<T>(url, data, config);
  },

  patch<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return api.patch<T>(url, data, config);
  },

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return api.delete<T>(url, config);
  },

  async fetch<T>(
    method: HTTPMethod,
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    switch (method) {
      case "get":
        return this.get<T>(url, data, config);
      case "post":
        return this.post<T>(url, data, config);
      case "put":
        return this.put<T>(url, data, config);
      case "patch":
        return this.patch<T>(url, data, config);
      case "delete":
        return this.delete<T>(url, config);
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  },
};

export default apiService;
