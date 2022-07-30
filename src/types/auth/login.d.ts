export interface LoginResponse {
    id?: string;
    username?: string;
    picture?: string;
    firstName?: string;
    lastName?: string;
    accessToken?: string;
    isVerified?: boolean;
    message: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}
