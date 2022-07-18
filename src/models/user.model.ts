import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IUser, IUserMethods, UserModel } from "../interfaces/models/user";

const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    firstName: {
        type: String,
        trim: true,
        required: [true, "First name is required."],
        text: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required."],
        text: true,
    },
    username: {
        type: String,
        trim: true,
        required: [true, "Username is required."],
        text: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
    picture: {
        type: String,
        trim: true,
        default:
            "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    gender: {
        type: Boolean,
        required: [true, "Gender is required."],
        trim: true,
    },
    bYear: {
        type: Number,
        trim: true,
        required: [true, "Year of birth is required."],
    },
    bMonth: {
        type: Number,
        trim: true,
        required: [true, "Month of birth is required."],
    },
    bDay: {
        type: Number,
        trim: true,
        required: [true, "Date of birth is required."],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    friends: [
        {
            type: ObjectId,
            ref: "User",
        },
    ],
    following: [
        {
            type: String,
        },
    ],
    followers: [
        {
            type: String,
        },
    ],
    requests: [
        {
            type: String,
        },
    ],
    search: [
        {
            user: {
                type: ObjectId,
                ref: "User",
            },
        },
    ],
    details: {
        bio: {
            type: Number,
        },
        otherName: {
            type: String,
        },
        job: {
            type: String,
        },
        workplace: {
            type: String,
        },
        highSchool: {
            type: String,
        },
        college: {
            type: String,
        },
        currentCity: {
            type: String,
        },
        hometown: {
            type: String,
        },
        relationship: {
            type: String,
            enum: ["Single", "In a relationship", "Married", "Divorced"],
        },
        instagram: {
            type: String,
        },
    },
    savedPosts: [
        {
            post: {
                type: ObjectId,
                ref: "Post",
            },
            savedAt: {
                type: Date,
                default: new Date(),
            },
        },
    ],
});

// Methods
userSchema.method("comparePassword", async function comparePassword(password) {
    return await bcrypt.compare(password, this.password);
});

// Indexes
userSchema.path("username").index({ unique: true });
userSchema.path("email").index({ unique: true });

const User = model<IUser, UserModel>("User", userSchema);

export default User;
