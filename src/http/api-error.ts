import type { AxiosError } from "axios";

export interface ApiErrorExtension {
  code?: string;
  correlation_id?: string;
}

export interface ApiErrorItem {
  message: string;
  locations?: Array<{
    line: number;
    column: number;
  }>;
  path?: string[];
  extensions?: ApiErrorExtension;
}

export type ApiErrorResponse = ApiErrorItem[];

export class ApiError extends Error {
  public readonly code?: string;
  public readonly correlationId?: string;
  public readonly rawErrors?: ApiErrorResponse;

  constructor(
    message: string,
    options?: {
      code?: string;
      correlationId?: string;
      rawErrors?: ApiErrorResponse;
    },
  ) {
    super(message);
    this.name = "ApiError";
    this.code = options?.code;
    this.correlationId = options?.correlationId;
    this.rawErrors = options?.rawErrors;
  }

  static fromAxios(error: AxiosError): ApiError {
    const data = error.response?.data as ApiErrorResponse | undefined;

    if (Array.isArray(data) && data.length > 0) {
      const firstError = data[0];

      return new ApiError(firstError.message, {
        code: firstError.extensions?.code,
        correlationId: firstError.extensions?.correlation_id,
        rawErrors: data,
      });
    }

    return new ApiError("Erro inesperado ao comunicar com a API");
  }
}
