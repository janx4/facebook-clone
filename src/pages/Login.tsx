import React, { useEffect, useState } from "react";
import LoginFooter from "../components/login/LoginFooter";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm";

interface Props {}

const Login: React.FC<Props> = () => {
    const [isOpenRegisterForm, setIsOpenRegisterForm] =
        useState<boolean>(false);

    const handleCloseRegisterForm = () => {
        setIsOpenRegisterForm(false);
    };

    return (
        <div className="login">
            <div className="login__container">
                <LoginForm setIsOpenRegisterForm={setIsOpenRegisterForm} />
                {isOpenRegisterForm && (
                    <RegisterForm handleClose={handleCloseRegisterForm} />
                )}
                <LoginFooter />
            </div>
        </div>
    );
};

export default Login;
