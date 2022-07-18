import { RequestHandler } from "express";
import generateToken from "../../helpers/token";
import User from "./../../models/user.model";

const login: RequestHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            const isMatch = await user.comparePassword(password);
            if (isMatch) {
                const accessToken = generateToken(
                    { id: user._id.toString() },
                    "7d"
                );
                res.json({
                    id: user._id,
                    username: user.username,
                    picture: user.picture,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    accessToken,
                    isVerified: user.isVerified,
                    message: "Login successfully!",
                });
            } else {
                return res
                    .status(400)
                    .json({ message: "Wrong credentials. Please try again." });
            }
        } else {
            return res
                .status(400)
                .json({ message: "Wrong credentials. Please try again." });
        }
    } catch (error) {
        next(error);
    }
};

export default login;
