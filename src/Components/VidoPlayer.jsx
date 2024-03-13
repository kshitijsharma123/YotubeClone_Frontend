import React from 'react'
import Headers from '../Header/Header'

import { useParams } from 'react-router-dom'

function VidoPlayer() {
    const { videoId } = useParams()


    return (
        <>
            <div className="h-screen bg-black bg-opacity-90">
                <Headers />
                <h1 className='text-2xl text-white'>Video id {videoId}</h1>
            </div>
        </>
    )
}

export default VidoPlayer