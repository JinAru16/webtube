import express from "express";
import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();//비디오 보기, 비디오 올리기, 비디오 지우기 등등

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;








