import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVideoById } from "../Controllers/video.controller";

import Headers from "./../Header/Header";
import VidoPlayer from "./VidoPlayer";
import ShowChannel from "./ShowChannel";
import LIkeAndDislike from "./LIkeAndDislike";

function Watch() {
  const { videoId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getVideoById(videoId),
    queryKey: ["Videos"],
  });

  const title = data?.video?.title;
  const video = data?.video;
  const likeCount = data?.likeCount;
  

  return (
    <>
      <Headers />
      <div>
        <div className="h-10 w-full"></div>
        <VidoPlayer data={video} isLoading={isLoading} />

        <div className=" ml-10 mt-2 flex-col h-auto w-7/12">
          <div className="  text-white h-12">
            <h1 className="font-bold text-2xl">{title}</h1>
          </div>
          <div className="flex  items-center gap-60">
            <div className=" p-0">
              <ShowChannel data={video} />
            </div>
            <div className="text-white ">
              <LIkeAndDislike videoId={videoId} likeCount={likeCount}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watch;
