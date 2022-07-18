import express from "express";
import userRouter from "./user.route";
import authRouter from "./auth.route";

const routes = express();

routes.use("/auth", authRouter);
routes.use("/users", userRouter);

export default routes;
