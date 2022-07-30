import { ErrorMessage, useField } from "formik";
import React from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

interface Props {
    id: string;
    name: string;
    placeholder: string;
    type: string;
    value: string | number;
    bottom?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterInput: React.FC<Props> = ({ bottom, ...props }) => {
    const [field, meta] = useField<Props>(props);
    const isError: boolean = !!(meta.touched && meta.error);
    const isDesktopView: boolean = useMediaQuery({
        query: "(min-width: 768px)",
    });

    return (
        <div className="registerInput_wrapper">
            {isError && !bottom && (
                <div
                    className={clsx(
                        "error_bubble",
                        isDesktopView ? "desktop" : ""
                    )}
                >
                    <ErrorMessage name={field.name} />

                    <div
                        className={
                            isDesktopView
                                ? "error_arrow_left"
                                : "error_arrow_top"
                        }
                    ></div>
                </div>
            )}

            <div className="input_wrapper">
                <input
                    className={clsx(isError ? "error" : "")}
                    {...field}
                    {...props}
                />
                {isError && <i className="error_icon"></i>}
            </div>

            {isError && bottom && (
                <div
                    className={clsx(
                        "error_bubble",
                        isDesktopView ? "desktop" : ""
                    )}
                >
                    <ErrorMessage name={field.name} />

                    <div
                        className={
                            isDesktopView
                                ? "error_arrow_left"
                                : "error_arrow_bottom"
                        }
                    ></div>
                </div>
            )}
        </div>
    );
};

export default RegisterInput;
