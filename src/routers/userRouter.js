import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();// 유저안에 속한 라우터, 회원정보 수정, 회원 탈퇴 등등

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", see);


export default userRouter;





