import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../inputs/LoginInput";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("The email address is invalid.")
        .required("Email is required."),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters.")
        .required("Password is required."),
});

const LoginForm: React.FC = () => {
    const initialValues = {
        email: "",
        password: "",
    };

    return (
        <div className="login__wrapper">
            <div className="login_1">
                <img src="/static/icons/facebook.svg" alt="facebook logo" />
                <span>
                    Facebook helps you connect and share with the people in your
                    life.
                </span>
            </div>
            <div className="login_2">
                <div className="login_2__wrapper">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={(values, actions) => {
                            console.log({ values });
                        }}
                    >
                        {(formik) => (
                            <Form noValidate>
                                <LoginInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email address"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                <LoginInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    bottom
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <button type="submit" className="blue_btn">
                                    Log In
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <Link to="/forgot" className="forgot_password">
                        Fogotten password?
                    </Link>
                    <div className="divider"></div>
                    <button className="blue_btn create_account">
                        Create Account
                    </button>
                </div>
                <Link to="/">
                    <b>Create a Page</b>
                </Link>{" "}
                for a celebrity, brand or business.
            </div>
        </div>
    );
};

export default LoginForm;
