export interface UserCredentials {
    id: string;
    username: string;
    picture: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    isVerified: boolean;
    message?: string;
}
