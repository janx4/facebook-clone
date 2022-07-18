import bcrypt from "bcryptjs";
import _ from "lodash";
import User from "../models/user.model";

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
};

export const processUsername = async (username: string) => {
    let isUsernameExists = false;
    username = username.trim();

    do {
        if (await User.findOne({ username })) {
            username += _.random(0, 99);
            isUsernameExists = true;
        } else {
            isUsernameExists = false;
        }
    } while (isUsernameExists);

    return username;
};
