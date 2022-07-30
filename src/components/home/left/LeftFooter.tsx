import React from "react";
import { Link } from "react-router-dom";

const LeftFooter = () => {
    return (
        <div className={`left__footer`}>
            <Link to="/">Privacy </Link>
            <span>. </span>
            <Link to="/">Terms </Link>
            <span>. </span>
            <Link to="/">Advertising </Link>
            <span>. </span>
            <Link to="/">
                Ad Choices <i className="ad_choices_icon"></i>{" "}
            </Link>
            <span>. </span>
            <Link to="/"></Link>Cookies <span>. </span>
            <Link to="/">More </Link>
            <span>. </span> <br />
            Meta © 2022
        </div>
    );
};

export default LeftFooter;
