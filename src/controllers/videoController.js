import { type } from "express/lib/response";
import Video from "../models/Video";

  
export const home = async(req, res) => {
  try{
  const videos = await Video.find({});// ()속의 {}는 serch terms를 나타내는데, {}속이 비어있다면 모든 형식을 찾는다는 뜻.
  console.log(videos);
  return res.render("home", { pageTitle: "Home", videos })
  
} catch(error) {
    console.log(error)
  }
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  res.render("edit", {pageTitle: `Edit` });
  };

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
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
  return res.redirect("/");
} catch(error) {
  console.log(error)
  return res.render("upload", { pageTitle: "Upload Video", 
  errorMessage: error._message,
 });
}
};