export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: boolean;
    bYear: number;
    bMonth: number;
    bDay: number;
    username: string;
}

export interface RegisterResponse {
    id?: string;
    username?: string;
    picture?: string;
    firstName?: string;
    lastName?: string;
    accessToken?: string;
    isVerified?: boolean;
    message: string;
}
