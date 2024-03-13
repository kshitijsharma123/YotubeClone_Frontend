import React from "react";


function VideoCard(props) {
 

  const { title = "Learn To Play Guitar", username = "Kshitij", thumbnail='https://res.cloudinary.com/dyfz3jsfl/image/upload/v1710328175/zizpozrdc60xf4kxk8c1.jpg', channelImage } = props

  return (
    <>


      <div className="  h-60 w-100 rounded-xl flex flex-col ">
        <div id="thumbnail">
          <img 
            src={thumbnail}
            alt="thumbnail"
            className="rounded-xl h-48 w-96 hover:scale-105 transition-transform duration-300" 
            
            onError={(e) => {
              e.target.src = ""
            }}
          />
        </div>
        <div className="m-2 flex justify-start ml-2">
          <img
            src={channelImage}
            alt="channel"
            srcSet=""
            className="h-10 w-10 rounded-3xl mr-2"
          />
          <div className="flex flex-col">
            <h4 className="font-Roboto text-white text-xl ml-4">{title}</h4>
            <h4 className="font-Roboto text-white text-sm ml-4">{username}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
