import  Mongoose  from "mongoose";

const videoSchema = new Mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{type: String}],
    meta:{
        views: Number,
        rating:  Number,
    },
});

const Video = Mongoose.model("Video", videoSchema); //.model("Video", asdf)에서 Video는 mongoose에게 DB의 model 이름을 말해주는거임.
export default Video;
