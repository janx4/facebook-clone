import React from "react";
import LoginFooter from "../components/login/LoginFooter";
import LoginForm from "../components/login/LoginForm";

interface Props {}

const Login: React.FC<Props> = () => {
    return (
        <div className="login">
            <div className="login__container">
                <LoginForm />
                <div className="register"></div>
                <LoginFooter />
            </div>
        </div>
    );
};

export default Login;
