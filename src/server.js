import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");
console.log(process.cwd());

app.set("view engine", "pug"); // pug를 기본 뷰 엔진으로 설정. package.json이 있는곳이 cwd임. cwd = 현재 작업 디렉토리의 위치
app.set("views", process.cwd() + "/src/views"); // package.json이 있는곳이 아닌 src폴더가 있는 views폴더로 디렉토리 위치를 변경해줌
app.use(logger);// global middleware를 생성할때 씀
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);





// port
const PORT = 3000;
const handelListening = () => console.log(`Server is listening on port http://localhost:${PORT} `)

app.listen(PORT, handelListening)