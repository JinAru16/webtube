import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev")
app.use(logger);// global middleware를 생성할때 씀


app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);





// port
const PORT = 3000;
const handelListening = () => console.log(`Server is listening on port http://localhost:${PORT} `)

app.listen(PORT, handelListening)