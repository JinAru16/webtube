
export const trending = (req, res) => {
    const videos = [
        {
            title:"실시간 급상승 1등",
            rating:5,
            comments:3023,
            createdAt: "150 mins ago",
            views : 134000,
            id : 1,

        },
        {
            title:"video2",
            rating:5,
            comments:231,
            createdAt: "1 day ago",
            views : 124320,
            id : 3,
        },
        {
            title:"스테이크는 제발 사드세요",
            rating:5,
            comments:3023,
            createdAt: "60 mis ago",
            views : 11000,
            id : 2,
        },
    ];
    res.render("home", { pageTitle: "Home <- Comes from controller", videos });
}

export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("seach the video");
export const upload = (req, res) => res.send("Upload your video");
export const deleteVideo = (req, res) => res.send("delete your video");

 