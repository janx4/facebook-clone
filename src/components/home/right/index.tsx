import React from "react";
import { ICON_COLOR } from "../../../constants";
import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";

interface Props {}

const HomeRight: React.FC<Props> = () => {
    return (
        <div className="home__right">
            <div className="contacts">
                <div className="contacts__header">
                    <div className="left">Contacts</div>
                    <div className="right">
                        <div className="right__circle hover1">
                            <NewRoom color={ICON_COLOR} />
                        </div>
                        <div className="right__circle hover1">
                            <Search color={ICON_COLOR} />
                        </div>
                        <div className="right__circle hover1">
                            <Dots color={ICON_COLOR} />
                        </div>
                    </div>
                </div>

                <div className="contacts_list">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default HomeRight;
