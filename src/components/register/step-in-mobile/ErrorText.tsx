import React from "react";

interface Props {
    messenge: string;
}

const ErrorText: React.FC<Props> = ({ messenge }) => {
    return (
        <div className="error">
            <div className="wrap">{messenge}</div>
        </div>
    );
};

export default ErrorText;
