import { Link } from "react-router-dom";
import {
  abberviateViewCount,
  convertDuration,
} from "../utils/utilFunctions.js";
function VideoCard(props) {
  const {
    ownerId,
    title = "Learn To Play Guitar",
    username = "Kshitij",
    thumbnail = "https://res.cloudinary.com/dyfz3jsfl/image/upload/v1710328175/zizpozrdc60xf4kxk8c1.jpg",
    channelImage,
    views,
    duration,
  } = props;

  const { minutes, seconds } = convertDuration(duration);

  const view = abberviateViewCount(views);

  return (
    <>
      <div className="  h-60 w-100 rounded-xl flex flex-col mb-3 ">
        <div
          id="thumbnail"
          className="relative hover:scale-105 transition-transform duration-300"
        >
          <img
            src={thumbnail}
            alt="thumbnail"
            className="rounded-xl h-48 object-cover  w-96 "
            onError={(e) => {
              e.target.src = "";
            }}
          />
          <div className="absolute bottom-2 right-2 bg-black h-5 w-10 pl-2 rounded-md">
            <h4 className="text-sm font-semibold">{`${minutes}:${seconds}`}</h4>
          </div>
        </div>
        <div className="m-2 flex  justify-start ml-2">
          <img
            src={channelImage}
            alt="channel"
            srcSet=""
            className="h-10 w-10 rounded-3xl mr-2 object-cover"
          />
          <div className="flex flex-col">
            <h4 className="font-Roboto text-white text-xl ml-4">{title}</h4>
            <div className="flex gap-2 flex-row">
              <Link to={`channel/${ownerId}`}>
                <h4 className="font-Roboto text-white text-sm ml-4 hover:font-semibold">
                  {username}
                </h4>
              </Link>
              <h6 className=" font-extralight text-sm">‧ {view} views</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
