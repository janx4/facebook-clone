import React, { useState } from "react";
import { Link } from "react-router-dom";
import { leftData } from "../../../assets/data/home";
import { ArrowDown1 } from "../../../svg";
import { UserCredentials } from "../../../types/user/user";
import Divider from "../../divider";
import LeftFooter from "./LeftFooter";
import LeftLink from "./LeftLink";
import Shortcut from "./Shortcut";

interface Props {
    user: UserCredentials | null;
}

const HomeLeft: React.FC<Props> = ({ user }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="home__left scrollbar">
            <Link to="/profile" className="left__link">
                <img src={user?.picture} alt="user avatar" />
                <span>
                    {user?.firstName} {user?.lastName}
                </span>
            </Link>

            {leftData.slice(0, 8).map((data, index) => (
                <LeftLink key={index} {...data} />
            ))}

            {/* Click see more */}
            {isVisible ? (
                <>
                    {leftData.slice(8, leftData.length).map((data, index) => (
                        <LeftLink key={index} {...data} />
                    ))}

                    <div
                        className="left__link hover1"
                        onClick={() => setIsVisible(false)}
                    >
                        <div className="small_circle rotate180">
                            <ArrowDown1 />
                        </div>
                        <span>See less</span>
                    </div>
                </>
            ) : (
                <div
                    className="left__link hover1"
                    onClick={() => setIsVisible(true)}
                >
                    <div className="small_circle">
                        <ArrowDown1 />
                    </div>
                    <span>See more</span>
                </div>
            )}

            <Divider />

            <div className="shortcut">
                <div className="heading">Your Shortcuts</div>
                <div className="edit_shortcut">Edit</div>
            </div>
            <div className="shortcut_list">
                <Shortcut
                    link="https://www.youtube.com/c/MohamedHaJJi1/featured"
                    imgPath="/static/images/ytb.png"
                    name="My Youtube channel"
                />

                <Shortcut
                    link="https://www.instagram.com/med_hajji7/"
                    imgPath="/static/images/insta.png"
                    name="My Instagram "
                />
            </div>

            <LeftFooter />
        </div>
    );
};

export default HomeLeft;
