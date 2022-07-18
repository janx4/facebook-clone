import mongoose, { Model } from "mongoose";

interface IUserDetails {
    bio: string;
    otherName: string;
    job: string;
    workplace: string;
    highSchool: string;
    college: string;
    currentCity: string;
    hometown: string;
    relationship: string;
    instagram: string;
}

export interface IUser extends mongoose.Document {
    firstName: string;
    lastName: string;
    readonly username: string;
    email: string;
    password: string;
    picture: string;
    gender: boolean;
    bYear: number;
    bMonth: number;
    bDay: number;
    isVerified: boolean;
    friends: string[];
    following: string[];
    followers: string[];
    requests: string[];
    search: string[];
    details: IUserDetails;
    savedPosts: [
        {
            post: string;
            savedAt: Date;
        }
    ];
    comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IUserMethods {
    comparePassword(candidatePassword: string): boolean;
}

export type UserModel = Model<IUser, {}, IUserMethods>;

export default IUser;
