import React from "react";

interface Props {
    name: string;
    description: string;
    icon: string;
}

const AllMenuItem: React.FC<Props> = ({ name, description, icon }) => {
    return (
        <div className="all_menu_item hover1">
            <img src={`/static/left/${icon}.png`} alt="" />
            <div className="all_menu_col">
                <span>{name}</span>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default AllMenuItem;
