interface StatusResponse {
  code?: string;
  message?: string;
}

export interface Response<T> {
  data?: T;
  status?: StatusResponse;
}


