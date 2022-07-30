import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import HomeLeft from "../components/home/left";
import HomeRight from "../components/home/right";
import Stories from "../components/home/stories";
import useClickOutside from "../hooks/useClickOutside";
import { RootState } from "../redux/store";
import { UserCredentials } from "../types/user/user";

const Home = () => {
    const user: UserCredentials | null = useSelector(
        (state: RootState) => state.user.credentials
    );

    const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    // useClickOutside(ref, () => {
    //     if (ref?.current) {
    //         ref.current.style.display = "none";
    //     }
    // });

    return (
        <div className="home">
            <Header />
            {/* <div ref={ref} className="card"></div> */}
            <HomeLeft user={user} />
            <div className="home__middle">
                <Stories />
            </div>
            <HomeRight />
        </div>
    );
};

export default Home;
