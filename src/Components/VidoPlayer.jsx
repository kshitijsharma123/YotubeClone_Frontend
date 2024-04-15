import { useRef, useState, useReducer } from "react";


import { LoadingCircle } from "./HomePage.jsx";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { IoVolumeMute } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";

function VidoPlayer({ data,isLoading }) {
  
  const videoRef = useRef(null);
  const volumeRef = useReducer(null);
  const seekBarRef = useRef(null);

  const [duration, setDurration] = useState(Number);
  const [videoPlay, setVideoPlay] = useState(true);
  const [videoMute, setVideoMute] = useState(false);
  const [currentTime, setCurrentTime] = useState(Number);
  const [overMute, setOverMute] = useState(false);
  // useEffect(() => {

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch((err) => {
        alert(err.message);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      setVideoPlay(true);

      videoRef.current.play();
    } else {
      setVideoPlay(false);

      videoRef.current.pause();
    }
  };

  const changeVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (newVolume === 0) {
      setVideoMute(true);
    } else {
      setVideoMute(false);
      videoRef.current.volume = newVolume / 10;
    }
  };
  // Toggle mute

  const toggleMute = () => {
    if (videoRef.current.muted) {
      setVideoMute(false);
      videoRef.current.volume = 0.5;

      videoRef.current.muted = false;
    } else {
      setVideoMute(true);

      videoRef.current.muted = true;
    }
  };

  // Fetch video from the backdend Server

  if (isLoading) {
    return <LoadingCircle />;
  }

  function convertDuration(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return { minutes: minutes, seconds: remainingSeconds };
  }

  const handleOnloadedData = (e) => {
    let duration = convertDuration(e.target.duration);
    setDurration(duration);
  };

  const handleTimeUpdate = () => {
    let cTime = convertDuration(videoRef.current.currentTime);

    if (seekBarRef.current) {
      const per =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      console.log(per);
      seekBarRef.current.style.width = `${per}%`;
    }
    setCurrentTime(cTime);
  };



  const handleSeek = (e) => {
    if (videoRef.current && seekBarRef.current) {
      const seekBarRect = seekBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - seekBarRect.left; 
      const per = (clickX / seekBarRect.width) * 100;
      const duration = videoRef.current.duration;
      const newTime = (per / 100) * duration;
      videoRef.current.currentTime = newTime;
      console.log({ newTime });
    }
  };

  return (
    <>
      <div
        id="video-player-Container"
        style={{ height: "auto", maxWidth: "1080px" }}
        className="max-w-full ml-8 mr-8 relative"
      >
        <video
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleOnloadedData}
          onClick={togglePlayPause}
          ref={videoRef}
          width="1920"
          height="1080"
          autoPlay
        >
          <source src={data.videoFile} type="video/mp4" down />
        </video>

        <div
          id="timeline"
          className="absolute bottom-0 left-0 z-20 w-full h-14  text-white  py-2 opacity-0 hover:opacity-100 
        transition-opacity duration-300 "
        >
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center ">
              <button onClick={togglePlayPause} className=" mb-2- p-3 ">
                {videoPlay ? (
                  <FaPause className="h-8 w-8" />
                ) : (
                  <FaPlay className="h-6 w-6 ml-2 mt-1" />
                )}
              </button>

              <div className="  h-10 w-20 font-light  text-xl pb-3">
                <div className=" absolute bottom-2 font-medium">
                  {`${currentTime.minutes}:${currentTime.seconds}/${duration.minutes}:${duration.seconds}`}
                </div>
              </div>

              <div
                className=" flex justify-center items-center"
                onMouseEnter={() => {
                  setOverMute(true);
                }}
                onMouseLeave={() => {
                  setOverMute(false);
                }}
              >
                <button className="ml-2 " onClick={toggleMute}>
                  {videoMute ? (
                    <IoVolumeMute className="h-7 w-7" />
                  ) : (
                    <AiFillSound className="h-7 w-7" />
                  )}
                </button>

                {overMute ? (
                  <input
                    ref={volumeRef}
                    type="range"
                    className="  rounded  h-1 m-1 transition-width duration-500 w-20 ease-in-out "
                    min={0}
                    max={10}
                    onChange={changeVolume}
                    step={"any"}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* Right side */}
            <div className=" flex justify-between items-center mr-5">
              <button className="">
                <MdFullscreen onClick={toggleFullScreen} className="h-8 w-8" />
              </button>
            </div>
          </div>
          {/* Seek-bar */}
          <div
            onClick={handleSeek}
            className={` hover:h-2 absolute bottom-11 w-99-percent h-1 ml-1 bg-gray-600 cursor-pointer `}
          >
            <div
              id="progressBar"
              className="hover:h-2 h-1 bg-red-600 duration-500

              "
              style={{ width: "0%" }}
              ref={seekBarRef}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VidoPlayer;
