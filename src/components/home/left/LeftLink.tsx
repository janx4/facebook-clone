import React from "react";

interface Props {
    imgFileName: string;
    text: string;
    notification?: string;
}

const LeftLink: React.FC<Props> = ({ imgFileName, text, notification }) => {
    return (
        <div className="left__link hover2">
            <img src={`/static/left/${imgFileName}`} alt="left-image" />

            {notification ? (
                <div className="col">
                    <div className="col1">{text}</div>
                    <div className="col2">{notification}</div>
                </div>
            ) : (
                <span>{text}</span>
            )}
        </div>
    );
};

export default LeftLink;
