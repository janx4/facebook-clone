import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterMobile from "./components/register/RegisterMobile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<RegisterMobile />} />
            </Route>
        </Routes>
    );
};

export default App;
