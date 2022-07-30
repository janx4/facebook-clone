import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface Props {
    caseSensitive?: boolean;
    children?: React.ReactNode;
    element?: React.ReactNode | null;
    index?: boolean;
    path?: string;
}

function ProtectedRoute({ element, path, ...rest }: Props) {
    const user = useSelector((state: RootState) => state.user.credentials);

    // console.log({ user });
    // return user ? (
    //     <Route element={element} path={path} {...rest} />
    // ) : (
    //     <Navigate to="/login" />
    // );

    return <Route element={element} path={path} {...rest} />;
}

export default ProtectedRoute;
