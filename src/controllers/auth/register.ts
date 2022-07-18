import { RequestHandler } from "express";
import validator from "validator";
import { sendVerificationEmail } from "../../helpers/mailer";
import generateToken from "../../helpers/token";
import User from "../../models/user.model";
import * as UserService from "../../services/user.service";

interface RegisterInputData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    gender: boolean;
    bYear: number;
    bMonth: number;
    bDay: number;
}

/**
 * Checking if the username or email is exists or not.
 */
const isUserExists = async (email: string): Promise<boolean> => {
    const user = await User.findOne({ email });
    if (user) return true;
    return false;
};

/**
 * Register the new account.
 */
const register: RequestHandler = async (req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            username,
            email,
            password,
            gender,
            bYear,
            bMonth,
            bDay,
        }: RegisterInputData = req.body;

        if (!validator.isEmail(email))
            return res.status(400).json({
                message: "Invalid email address",
            });

        if (await isUserExists(email)) {
            return res
                .status(400)
                .json({ message: "The email address already exists" });
        }

        // Hashing the password by using bcrypt algorithm
        const hashedPassword = await UserService.hashPassword(password);
        // Create unique username if the user already exists
        const uniqueUsername = await UserService.processUsername(username);

        const newUser = await new User({
            firstName,
            lastName,
            username: uniqueUsername,
            email,
            password: hashedPassword,
            gender,
            bYear,
            bMonth,
            bDay,
        }).save();

        const emailVerificationToken: string = generateToken(
            { id: newUser._id.toString() },
            "30m"
        );

        const confirmUrl = `${process.env.BASE_URL}/api/auth/activate/${emailVerificationToken}`;
        sendVerificationEmail(newUser.email, newUser.firstName, confirmUrl);

        const accessToken = generateToken({ id: newUser._id.toString() }, "7d");
        res.json({
            id: newUser._id,
            username: newUser.username,
            picture: newUser.picture,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            accessToken,
            isVerified: newUser.isVerified,
            message:
                "Register successfully. Please confirm your email address and start!",
        });
    } catch (error) {
        next(error);
    }
};

export default register;
