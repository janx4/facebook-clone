import React from "react";

interface Props {
    link: string;
    imgPath: string;
    name: string;
}

const Shortcut: React.FC<Props> = ({ link, imgPath, name }) => {
    return (
        <a
            href={link}
            rel="nonreference"
            target="_blank"
            className="shortcut__item hover1"
        >
            <img src={imgPath} alt="shortcut-item-image" />
            <span>{name}</span>
        </a>
    );
};

export default Shortcut;
