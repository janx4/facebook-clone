import React from "react";
import ErrorText from "./ErrorText";

interface Props {
    questionText: string;
    hintText: string;
}

const Step4: React.FC<Props> = ({ questionText, hintText }) => {
    return (
        <>
            <div className="question">{questionText}</div>
            <div className="hint">{hintText}</div>

            <div className="step4">
                <div className="lines">
                    <div className="line">
                        <label htmlFor="female">
                            <span>Female</span>
                            <input type="radio" name="gender" id="female" />
                        </label>
                    </div>
                    <div className="line">
                        <label htmlFor="male">
                            <span>Male</span>
                            <input type="radio" name="gender" id="male" />
                        </label>
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

export default Step4;
