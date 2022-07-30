import React from "react";
import { Return, Search } from "../../svg";

const SearchMenu = () => {
    return (
        <div className="header__left search_area scrollbar">
            <div className="wrap">
                <div className="header_logo"></div>
                <div className="">
                    <Return color="#65676b" />
                </div>
            </div>
            <div className="search">
                <Search color="#65676b" />
            </div>
        </div>
    );
};

export default SearchMenu;
