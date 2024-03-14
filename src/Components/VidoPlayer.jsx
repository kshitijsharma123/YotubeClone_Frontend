import React from 'react'
import Headers from '../Header/Header'

import { useParams } from 'react-router-dom'

function VidoPlayer() {
    const { videoId } = useParams()


    return (
        <>
            <Headers />
            <h1 className='text-2xl text-white'>Video id {videoId}</h1>
        </>
    )
}

export default VidoPlayer