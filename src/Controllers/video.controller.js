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


export const getVideoById = async (id) => {
    try {

        const res = await axios.get(`http://localhost:8000/api/v1/videos/v/${id}`)

        const videoData = res.data.data
        return videoData

    } catch (error) {
        console.log(error)
    }
}

await getVideoById("65f6a5399e179987245f7fae")