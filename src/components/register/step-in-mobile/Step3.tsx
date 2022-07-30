import React from "react";
import ErrorText from "./ErrorText";

interface Props {
    questionText: string;
    hintText: string;
}

const Step3: React.FC<Props> = ({ questionText, hintText }) => {
    return (
        <>
            <div className="question">{questionText}</div>
            <div className="hint">{hintText}</div>

            <div className="step1">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="firstName">Email address</label>
                        <input type="text" />
                    </div>
                </div>

                <ErrorText
                    messenge="This name contains certain characters that aren't
                        allowed. Learn more about our name policies."
                />
            </div>
        </>
    );
};

export default Step3;
