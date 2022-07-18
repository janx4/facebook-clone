import jwt from "jsonwebtoken";

export default function generateToken(
    payload: string | object | Buffer,
    expiredTime: string
) {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
        expiresIn: expiredTime,
    });
}
