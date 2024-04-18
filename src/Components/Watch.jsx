import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVideoById } from "../Controllers/video.controller";

import Headers from "./../Header/Header";
import VidoPlayer from "./VidoPlayer";

function Watch() {
  const { videoId } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getVideoById(videoId),
    queryKey: ["Videos"],
  });

  return (
    <>
      <Headers />
      <div className="h-10 w-full"></div>
      <VidoPlayer data={data} isLoading={isLoading} />
    </>
  );
}

export default Watch;
