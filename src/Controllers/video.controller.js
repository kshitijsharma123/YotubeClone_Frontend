import axios from "axios";

export const getVideos = async () => {
    try {
        const res = await axios.get("http://localhost:8000/api/v1/videos/home-video")
        
        const { videos } = res.data.data

        return videos

    } catch (error) {
        console.log(error)
    }
}
