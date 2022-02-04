import express from "express";
import { see, edit , deleteVideo, upload} from "../controllers/videoController";

const videoRouter = express.Router();//비디오 보기, 비디오 올리기, 비디오 지우기 등등

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);// (\\d+)는 :id에서 숫자만 따오는거임. :id자리에 무슨 글자를 타이핑 하던 숫자만 긁어줌. 숫자+문자 조합도 안됨. 숫자만 올때 :id로 인식함
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo)

export default videoRouter;








