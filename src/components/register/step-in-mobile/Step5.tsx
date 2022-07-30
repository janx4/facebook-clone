import React from "react";
import ErrorText from "./ErrorText";

interface Props {
    questionText: string;
    hintText: string;
}

const Step5: React.FC<Props> = ({ questionText, hintText }) => {
    return (
        <>
            <div className="question">{questionText}</div>
            <div className="hint">{hintText}</div>

            <div className="step1">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="firstName">New password</label>
                        <input type="text" />
                    </div>
                </div>

                <ErrorText messenge="Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)." />
            </div>
        </>
    );
};

export default Step5;
