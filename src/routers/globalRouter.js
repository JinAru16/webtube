import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";


const globalRouter = express.Router();// 글로벌 라우터, 로그인, 회원가입, 검색 등등등...

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login",login);
globalRouter.get("search", search)

export default globalRouter;

 




 