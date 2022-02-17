import  Mongoose  from "mongoose";

const videoSchema = new Mongoose.Schema({
    title: { type: String, required: true, trim: true, maxlength: 80 },
    description: { type: String, required: true, trim: true, minlength: 200 },
    createdAt: { type: Date, required: true, default: Date.now }, //now에 ()가 안붙는 이유는 바로 함수를 바로 실행하게 두고 싶지 않아서. Video가 실행될때만 작동하게 만들기 위해 ()를 제거.
    hashtags: [{type: String, trim: true }],
    meta:{
        views: { type: Number, default: 0, required: true },
        rating:  { type: Number, default: 0, required: true },
    },
});

const Video = Mongoose.model("Video", videoSchema); //.model("Video", asdf)에서 Video는 mongoose에게 DB의 model 이름을 말해주는거임.
export default Video;
