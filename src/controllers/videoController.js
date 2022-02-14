import { type } from "express/lib/response";
import Video from "../models/Video";

  
export const home = (req, res) => {
  Video.find({},(error, videos)) // ()속의 {}는 serch terms를 나타내는데, {}속이 비어있다면 모든 형식을 찾는다는 뜻.
  return res.render("home", { pageTitle: "Home" });
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
}

export const postUpload = (req, res) => {
  // here we will add video to the videos array.
  const { title } = req.body
  videos.push(newVideo)
  return res.redirect(`videos/${newVideo.id}`);
}