import express from "express";
import { watch, getEdit , postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();//비디오 보기, 비디오 올리기, 비디오 지우기 등등

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);// (\\d+)는 :id에서 숫자만 따오는거임. :id자리에 무슨 글자를 타이핑 하던 숫자만 긁어줌. 숫자+문자 조합도 안됨. 숫자만 올때 :id로 인식함
// ([0-9a-f]{24})는 몽고db의 아이디 형식인 hexadecimal을 인식하는 방법임.
// url 하나에 get도 쓰고 post도 쓸때 유용한 방법. get을 받으면 getEdit을 실행하고. post를 받으면 postEdit을 받으란 이야기.
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
/*
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);
이 두줄을 하나로 합치는게 밑에 route를 스고 get.get을 씀
*/


export default videoRouter;








