import { type } from "express/lib/response";
import Video from "../models/Video";

  
export const home = async(req, res) => {
  try{
  const videos = await Video.find({});// ()속의 {}는 serch terms를 나타내는데, {}속이 비어있다면 모든 형식을 찾는다는 뜻.
  return res.render("home", { pageTitle: "Home", videos })
  
} catch(error) {
    console.log(error)
  }
};
export const watch = async(req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(!video){// 만약 비디오id가 아니라면
    return res.render("404", {pageTitle: "Video not found "});
  };
  return res.render("watch", { pageTitle: video.title, video: video });
  
};
export const getEdit = async(req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id)
  if(!video) {
    return res.render("404", {pageTitle: "Video not found "});
  }
  return res.render("edit", {pageTitle: `Edit ${video.title}`, video });
  };

export const postEdit = async(req, res) => {
  const { id } = req.params;
  const { title, description, hashtags} = req.body;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "video not found"});
  }
  video.title = title;
  video.description = description;
  video.hashtags = hashtags
    .split(" ")
    .map(word => word.startsWith("#") ? word : `#${word}`);// #으로 시작하면 word만  그렇지않으면(#으로 시작 안하면) #을 붙여서 출력
  await video.save();
  return res.redirect(`/videos/${id}`); //redirect는 자동으로 특정 url로 보냄.
};

export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle: "Upload Video"});
};

export const postUpload = async(req, res) => {
  // here we will add video to the videos array.
  const { title, description, hashtags } = req.body;
  try {
  const video = new Video({
    title: title, // 왼쪽 title은 스키마의 title을 나타내고 오른쪽 title은 req.body를 뜻함. 
    description: description,
    hashtags: hashtags.split(" ").map(word => `#${word}`),

    /* create방식도 있음.
    await Video.create({
      title,
      diescription,
      .
      .

    })
    video.save()는 안쓰는거임. 그냥 create로  끝남
    */
  });
  await video.save();
  console.log(video)
  console.log("video uploaded")
  return res.redirect("/");
} catch(error) {
  console.log(error)
  return res.render("upload", { pageTitle: "Upload Video", 
  errorMessage: error._message,
 });
}
};