import React, { useRef, useState } from "react";
import {
    ArrowDown,
    ArrowRight,
    Friends,
    Gaming,
    HomeActive,
    Logo,
    Market,
    Menu,
    Messenger,
    Notifications,
    Search,
    Watch,
} from "../../svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UserCredentials } from "../../types/user/user";
import clsx from "clsx";
import useClickOutside from "../../hooks/useClickOutside";
import AllMenu from "./AllMenu";
import { ICON_COLOR } from "../../constants";

const Header = () => {
    const [showSearchMenu, setShowSearchMenu] = useState<boolean>(false);
    const [showAllMenu, setShowAllMenu] = useState<boolean>(false);

    const searchRef: React.MutableRefObject<HTMLDivElement | null> =
        useRef(null);
    const allMenuRef: React.MutableRefObject<HTMLDivElement | null> =
        useRef(null);

    const user: UserCredentials | null = useSelector(
        (state: RootState) => state.user.credentials
    );

    console.log("showAllMenu", showAllMenu);

    // Close search menu when user clicks outside
    useClickOutside(searchRef, () => {
        if (searchRef?.current) {
            setShowSearchMenu(false);
        }
    });

    // Close all menu when user clicks outside
    useClickOutside(allMenuRef, () => {
        if (allMenuRef?.current) {
            setShowAllMenu(false);
        }
    });

    return (
        <header className="header">
            <div className="header__left">
                <Link
                    to="/"
                    className={
                        (clsx("header__logo"), showSearchMenu ? "hidden" : "")
                    }
                >
                    <Logo />
                </Link>

                <div className="search" onClick={() => setShowSearchMenu(true)}>
                    <div
                        className={clsx(
                            "search__icon",
                            showSearchMenu ? "hidden" : ""
                        )}
                    >
                        <Search color={ICON_COLOR} />
                    </div>
                    <input type="text" placeholder="Search Facebook" />
                </div>
                {showSearchMenu && (
                    <>
                        <div ref={searchRef} className="search_menu">
                            <div className="top">
                                <span className="top__title">
                                    Recent searches
                                </span>
                                <span className="top__edit hover1">Edit</span>
                            </div>
                            <div className="bottom"></div>
                        </div>
                        <div className="arrow__left"></div>
                    </>
                )}
            </div>

            <div className="header__middle">
                <Link to="/" className="header__middle-icon hover1 active">
                    <HomeActive />
                </Link>
                <Link to="/" className="header__middle-icon hover1">
                    <Friends color="#65676b" />
                </Link>
                <Link to="/" className="header__middle-icon hover1">
                    <Watch color="#65676b" />
                </Link>
                <Link to="/" className="header__middle-icon hover1">
                    <Market color="#65676b" />
                </Link>
                <Link to="/" className="header__middle-icon hover1">
                    <Gaming color="#65676b" />
                </Link>
            </div>

            <div className="header__right">
                <Link to="/profile" className="profile__link hover1">
                    <img src={user?.picture} alt="user-avatar" />
                    <span>{user?.firstName}</span>
                </Link>
                <div
                    ref={allMenuRef}
                    className="circle_icon hover1"
                    onClick={() => setShowAllMenu((pre) => !pre)}
                >
                    <Menu />
                </div>
                <div className="circle_icon hover1">
                    <Messenger />
                    <span className="total">4</span>
                </div>
                <div className="circle_icon hover1">
                    <Notifications />
                </div>
                <div className="circle_icon hover1 relative">
                    <ArrowDown color="" />
                    {showAllMenu && <AllMenu />}
                </div>
            </div>
        </header>
    );
};

export default Header;
