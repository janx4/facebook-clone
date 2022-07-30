import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { getTimeValues, getTotalDaysOfTime } from "../../utils/time";
import RegisterInput from "../inputs/RegisterInput";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { randomLargeNumber } from "../../utils/random";
import { useRegisterMutation } from "../../services/AuthAPI";

interface Props {
    handleClose: () => void;
}

const RegisterSchema = Yup.object({
    firstName: Yup.string()
        .required("What's your First name ?")
        .min(2, "Fisrt name must be between 2 and 16 characters.")
        .max(16, "Fisrt name must be between 2 and 16 characters.")
        .matches(
            /^[aA-zZ]+$/,
            "Numbers and special characters are not allowed."
        ),
    lastName: Yup.string()
        .required("What's your Last name ?")
        .min(2, "Last name must be between 2 and 16 characters.")
        .max(16, "Last name must be between 2 and 16 characters.")
        .matches(
            /^[aA-zZ]+$/,
            "Numbers and special characters are not allowed."
        ),
    email: Yup.string()
        .required(
            "You'll need this when you log in and if you ever need to reset your password."
        )
        .email("Enter a valid email address."),
    password: Yup.string()
        .required(
            "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
        )
        .min(6, "Password must be atleast 6 characters.")
        .max(36, "Password can't be more than 36 characters"),
});

const RANGE_YEAR = 100;
const RegisterForm: React.FC<Props> = ({ handleClose }) => {
    const navigate = useNavigate();
    const isMobileOrTablet: boolean = useMediaQuery({
        query: "(max-width: 1024px)",
    });
    const [register, { isLoading }] = useRegisterMutation();

    // Fix register mobile view
    useEffect(() => {
        if (isMobileOrTablet) {
            navigate("/register");
        }
    }, [isMobileOrTablet, navigate]);

    // Initial state Formik
    const { CURRENT_YEAR, CURRENT_MONTH, CURRENT_DAY } = getTimeValues();
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: true,
        bYear: CURRENT_YEAR,
        bMonth: CURRENT_MONTH,
        bDay: CURRENT_DAY,
    };

    // For select date of birth
    const years: number[] = Array.from(
        new Array(RANGE_YEAR),
        (_, index) => CURRENT_YEAR - index
    );
    const months: number[] = Array.from(new Array(12), (_, index) => index + 1);
    const days: number[] = Array.from(
        new Array(getTotalDaysOfTime(CURRENT_YEAR, CURRENT_DAY)),
        (_, index) => index + 1
    );

    // console.log("months", months);
    // console.log("days", days);

    return (
        <div className="blur">
            <div className="register">
                <div className="register__header">
                    <i onClick={handleClose} className="exit_icon"></i>
                    <span>Sign Up</span>
                    <span>It's quick and easy.</span>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={RegisterSchema}
                    onSubmit={async (values, actions) => {
                        try {
                            // Convert gender to boolean
                            values.gender = !!values.gender;
                            const registerData = {
                                ...values,
                                username: "" + randomLargeNumber(),
                            };
                            // Register request
                            const result = await register(registerData);

                            if ("data" in result) {
                                console.log(result.data);
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                >
                    {(formik) => (
                        <Form noValidate className="register__form">
                            <div className="row">
                                <RegisterInput
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First name"
                                    type="text"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                />
                                <RegisterInput
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last name"
                                    type="text"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="row">
                                <RegisterInput
                                    id="email"
                                    name="email"
                                    placeholder="Email address"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="row">
                                <RegisterInput
                                    id="password"
                                    name="password"
                                    placeholder="New password"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="row">
                                <div className="row__header">
                                    Date of birth <i className="info_icon"></i>
                                </div>
                                <div className="row__cols">
                                    <select
                                        name="bDay"
                                        id="bDay"
                                        value={formik.values.bDay}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                "bDay",
                                                +e.target.value || 1
                                            )
                                        }
                                    >
                                        {days.map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        name="bMonth"
                                        id="bMonth"
                                        value={formik.values.bMonth}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                "bMonth",
                                                +e.target.value || 1
                                            )
                                        }
                                    >
                                        {months.map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        name="bYear"
                                        id="bYear"
                                        value={formik.values.bYear}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                "bYear",
                                                +e.target.value || 1970
                                            )
                                        }
                                    >
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row__header">
                                    Gender <i className="info_icon"></i>
                                </div>
                                <div className="row__cols_2">
                                    <label
                                        className="radio__wrapper"
                                        htmlFor="male"
                                    >
                                        Male
                                        <Field
                                            value="true"
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            // checked={!!formik.values.gender}
                                        />
                                    </label>
                                    <label
                                        className="radio__wrapper"
                                        htmlFor="female"
                                    >
                                        Female
                                        <Field
                                            value="false"
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            // checked={!formik.values.gender}
                                        />
                                    </label>
                                </div>
                            </div>
                            <p className="register__info">
                                People who use our service may have uploaded
                                your contact information to Facebook. Learn
                                more.
                            </p>
                            <p className="register__info">
                                By clicking Sign Up, you agree to our Terms,
                                Data Policy and Cookie Policy. You may receive
                                SMS notifications from us and can opt out at any
                                time.
                            </p>
                            <div className="register__btn-wrapper">
                                <button type="submit">Sign Up</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RegisterForm;
