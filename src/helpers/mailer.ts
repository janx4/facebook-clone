import "dotenv/config";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { generateConfirmHTML } from "./htmlString";

const { OAuth2 } = google.auth;

const OAUTH2_CLIENT_ID = process.env.OAUTH2_CLIENT_ID!;
const OAUTH2_CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET!;
const MAILING_EMAIL_ADDRESS = process.env.MAILING_EMAIL_ADDRESS!;
const MAILING_REFRESH_TOKEN = process.env.MAILING_REFRESH_TOKEN!;

const oauthLink = "https://developers.google.com/oauthplayground";

const oauth2Client = new OAuth2(
    OAUTH2_CLIENT_ID,
    OAUTH2_CLIENT_SECRET,
    oauthLink
);

oauth2Client.setCredentials({
    refresh_token: MAILING_REFRESH_TOKEN,
});

// oauth2Client.on("tokens", (tokens) => {
//     if (tokens.refresh_token) {
//         oauth2Client.setCredentials({
//             refresh_token: tokens.refresh_token,
//         });
//     }
// });

export const sendVerificationEmail = async (
    email: string,
    name: string,
    url: string
) => {
    const accessToken = oauth2Client.getAccessToken() + "";

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            type: "OAuth2",
            user: MAILING_EMAIL_ADDRESS,
            clientId: OAUTH2_CLIENT_ID,
            clientSecret: OAUTH2_CLIENT_SECRET,
            refreshToken: MAILING_REFRESH_TOKEN,
            accessToken,
        },
    });

    const message = {
        from: MAILING_EMAIL_ADDRESS,
        to: email,
        subject: "Confirm your Facebook account",
        text: `Confirm your Facebook account via this link: ${url}`,
        html: generateConfirmHTML(name, url),
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log({ err });
        } else {
            console.log({ info });
        }
    });
};
