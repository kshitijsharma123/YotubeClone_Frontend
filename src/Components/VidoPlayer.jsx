import React from 'react'
import Headers from '../Header/Header'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getVideoById } from '../Controllers/video.controller'
import { CiPlay1, CiPause1 } from "react-icons/ci";


function VidoPlayer() {

    const videoRef = React.useRef(null)
    const [videoPlay, setVideoPlay] = React.useState(true)
   
    const togglePlayPause = () => {

        if (videoRef.current.paused) {
            setVideoPlay(true)
            videoRef.current.play()
        } else {
            setVideoPlay(false)

            videoRef.current.pause()
        }

    }

    const { videoId } = useParams()

    const { data, isLoading } = useQuery({
        queryFn: () => getVideoById(videoId),
        queryKey: ["Videos"]
    });

    if (isLoading) {
        return <div>...Loading</div>
    }


    return (
        <>
            <Headers />
            <div className="h-10 w-full"></div>
            <div id="video-player-Container" style={{ height: "400", width: "640" }} className='max-w-full ml-8 mr-8 relative  '>
                <video ref={videoRef} width="1920" height="1080" autoPlay >
                    <source src={data.videoFile} type="video/mp4" />
                </video>

                <div className="absolute bottom-0 left-0 z-20 w-full h-10   text-white bg-black  py-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between">
                        <div className="flex justify-between">
                            <button onClick={togglePlayPause} className="absolute top-0">
                                {videoPlay ? (
                                    <CiPause1 className="h-10 w-10" />
                                ) : (
                                    <CiPlay1 className="h-10 w-10" />

                                )}
                            </button>

                        </div>

                        <div className='flex justify-between'>

                            <button>Play</button>
                            <button>Play</button>
                            <button>Play</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='m-4 text-white font-bold text-2xl'>{data.title}</div>

        </>
    )
}

export default VidoPlayer