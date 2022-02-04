export const trending = (req, res) => res.send("home page videos")
export const see = (req, res) => {
    console.log(req.params)
    res.send("see");
    }
export const edit = (req, res) => {
    
    console.log(req.params)
    res.send("Edit");

}

export const search = (req, res) => res.send("seach the video");
export const upload = (req, res) => res.send("Upload your video");
export const deleteVideo = (req, res) => {
    console.log(req.params)
    res.send("delete your video");


}

