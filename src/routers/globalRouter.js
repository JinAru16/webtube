import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";


const globalRouter = express.Router();// 글로벌 라우터, 로그인, 회원가입, 검색 등등등...
const handelHome = (req, res) => res.send("Home");
const handleJoin = (req, res) => res.send("Join")

globalRouter.get("/", trending);
globalRouter.get("/join", join)

export default globalRouter;






 