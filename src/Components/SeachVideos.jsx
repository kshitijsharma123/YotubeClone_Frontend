import { useParams } from 'react-router-dom';
import Headers from './../Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import VideoCard from './VIdeoCard';

function SeachVideos() {
  const [videos, setVideos] = useState([]);
  const { title } = useParams();
  

  const fetchData = async (e) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/videos?title=${e}`);
      const video = res.data.data;

      setVideos(video);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(title);
  }, [title]);

  return (
    <>
      <Headers />
      <div className="h-16 w-ful"></div>
      {videos.length === 0 ? (
        <div className='h-screen flex justify-center items-center text-white text-3xl gap-2'>No videos Found</div>
      ) : (
        <div className="text-white text-2xl flex  gap-4">
          {videos.map((v, index) => (
            <Link to={`/video/${v._id}`}>
              <VideoCard key={index} title={v.title}
                username={v.owner.username} thumbnail={v.thumbnail} channelImage={v.owner.avatar} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default SeachVideos;
