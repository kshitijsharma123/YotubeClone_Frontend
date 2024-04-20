import axios from "axios";

export const getVideos = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/v1/videos/home-video"
    );

    const { videos } = res.data.data;

    return videos;
  } catch (error) {
    console.log(error.message);
  }
};

export const getVideoById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/v1/videos/v/${id}`);

    // const videoData = res.data.data.video;
    const videoData = res.data.data;
//     const likeCount = res.data.data.likeCount;
// likeCount
    return videoData;
  } catch (error) {
    console.log(error);
  }
};

await getVideoById("65f6a5399e179987245f7fae");
