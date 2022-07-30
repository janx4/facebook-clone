import React from "react";
import Step1 from "./step-in-mobile/Step1";
import Step2 from "./step-in-mobile/Step2";
import Step3 from "./step-in-mobile/Step3";
import Step4 from "./step-in-mobile/Step4";
import Step5 from "./step-in-mobile/Step5";

const RegisterMobile = () => {
    return (
        <div className="register-mobile">
            <div className="header">
                <span>Join Facebook</span>
            </div>

            <div className="form">
                {/* <Step1
                    questionText="What's your name?"
                    hintText="Enter the name you use in real life."
                /> */}
                {/* <Step2
                    questionText="What's your date of birth?"
                    hintText="Choose your date of birth. You can always make this private later."
                /> */}
                {/* <Step3
                    questionText="Enter your email address"
                    hintText="Enter the email address at which you can be contacted. You can hide this from your profile later."
                /> */}

                {/* <Step4
                    questionText="What's your gender?"
                    hintText="You can change who sees your gender on your profile later."
                /> */}

                <Step5
                    questionText="Choose a password"
                    hintText="Create a password with at least 6 characters. It should be something that others couldn't guess."
                />
            </div>

            <div className="wrapper">
                <button className="btn">Next</button>
            </div>

            <p className="back">Already have an account?</p>

            <div className="langs">
                <div className="col">
                    <p>English (UK)</p>
                    <p>中文(台灣)</p>
                    <p>Español</p>
                    <p>Français (France)</p>
                </div>
                <div className="col">
                    <p>Tiếng Việt</p>
                    <p>한국어</p>
                    <p>Português (Brasil)</p>
                    <p>
                        <i className="plus_icon"></i>
                    </p>
                </div>
            </div>
            <p className="copyright">Meta © 2022</p>
        </div>
    );
};

export default RegisterMobile;
