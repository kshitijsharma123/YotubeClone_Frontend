import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import VideoCard from "./VideoCard";
import { getVideos } from "../Controllers/video.controller";



const LoadingCircle = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="  rounded-full border-4 border-t-4 border-gray-200 h-10 w-10"></div>
    </div>
  );
};


function HomePage() {

  const { data, isLoading } = useQuery({
    queryFn: () => getVideos()
    , queryKey: ["videoCard"],
    initialPageParam: 0,

  })


  if (isLoading) {
    return <LoadingCircle />
  }

 
  return (
    <>
      <div className="flex flex-wrap gap-4 items-start  ">
        {data.map((v) => (
          <div className="text-white text-2xl" key={v._id}>
            <Link to={`/video/${v._id}`} >
              <VideoCard title={v.title}
                username={v.owner.username} thumbnail={v.thumbnail} channelImage={v.owner.avatar} />
            </Link>

          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
