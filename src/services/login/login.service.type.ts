export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  access_expired_at: number;
  refresh_token: string;
  refresh_expired_at: number;
}
