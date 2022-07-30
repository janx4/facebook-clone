import React from "react";
import ErrorText from "./ErrorText";

interface Props {
    questionText: string;
    hintText: string;
}

const Step2: React.FC<Props> = ({ questionText, hintText }) => {
    return (
        <>
            <div className="question">{questionText}</div>
            <div className="hint">{hintText}</div>

            <div className="step2">
                <label>Date of birth</label>
                <div className="grid">
                    <select name="" id="">
                        <option value="12">12</option>
                    </select>
                    <select name="" id="">
                        <option value="12">12</option>
                    </select>
                    <select name="" id="">
                        <option value="12">12</option>
                    </select>
                </div>

                <ErrorText
                    messenge="This name contains certain characters that aren't allowed. Learn
                    more about our name policies.It looks like you've entered the
                    wrong info. Please make sure that you use your real date of
                    birth."
                />
            </div>
        </>
    );
};

export default Step2;
