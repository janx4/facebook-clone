export const generateConfirmHTML = (
    name: string,
    targetUrl: string
): string => {
    return `<div
                style="
                    min-width: 502px;
                    height: 452px;
                    font-family: Helvetica Neue, Helvetica, Lucida Grande, tahoma,
                        verdana, arial, sans-serif;
                "
            >
                <div style="width: 500px; margin: auto; height: 100%">
                    <div style="height: 64px; border-bottom: 1px solid #e4e4e4">
                        <img
                            src="https://ci4.googleusercontent.com/proxy/D_oohlv2hsIjT6M1aBqO8UPz1U1IjF8bsnx_F3p5tPT_4w1LY1zdC56QOK0xenHZu6vaMtxh4KtsY6QhzC90d9qS-5lz8451BikV6Yo4Fg=s0-d-e1-ft#https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/Ik2gLzq8_6B.png"
                            alt="logo"
                            width="32"
                            height="32"
                            style=""
                        />
                        <a
                            href="${targetUrl ? targetUrl : "#"}"
                            style="
                                margin-left: 16px;
                                text-decoration: none;
                                font-size: 19px;
                                color: #1877f2;
                                line-height: 64px;
                                display: inline-block;
                                text-decoration: none;
                            "
                            >Action required: Confirm your Facebook account</a
                        >
                    </div>

                    <div style="padding: 16px; font-size: 16px">
                        <p>Hey ${name},</p>
                        <p>We need you to confirm your Facebook account.</p>
                        <a
                            style="
                                border-collapse: collapse;
                                text-decoration: none;
                                border-radius: 6px;
                                text-align: center;
                                display: block;
                                background: #1877f2;
                                padding: 8px 16px 10px 16px;
                                color: white;
                                font-weight: bold;
                                border: none;
                                width: max-content;
                                font-size: 14px;
                            "
                            href="${targetUrl ? targetUrl : "#"}"
                        >
                            Confirm
                        </a>
                    </div>
                </div>
            </div>`;
};
