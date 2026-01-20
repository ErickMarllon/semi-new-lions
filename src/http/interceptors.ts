import type { AxiosInstance, AxiosError } from "axios";
import { ApiError } from "./api-error";

export function setupInterceptors(api: AxiosInstance) {
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      throw ApiError.fromAxios(error);
    },
  );
}
