import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../../models/user.model";

const activateAccount: RequestHandler = async (req, res, next) => {
    try {
        const verifyToken = req.params.token;

        const decode = jwt.verify(verifyToken, process.env.JWT_SECRET_KEY!);
        const userId = typeof decode === "string" ? decode : decode?.id;
        const user = await User.findById(userId);

        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid confirm request." });
        }

        if (user?.isVerified) {
            return res
                .status(400)
                .json({ message: "This email address is already verified." });
        } else {
            user.isVerified = true;
            await user.save();
            return res.json({
                message: "Verify the email address successfully.",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default activateAccount;
