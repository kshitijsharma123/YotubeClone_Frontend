import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import userDataContext from "../context/userContext";
import React from "react";

export default function LikeAndDislike({ videoId, likeCount }) {
 
  const { islikedAndLikeCount, toggleDislike, likeStatus, toggleLike } =
    React.useContext(userDataContext);

  const [like, setLike] = React.useState(likeCount);

  React.useEffect(() => {
    islikedAndLikeCount(videoId);
    setLike(likeCount);
  }, [videoId, likeCount]);

  React.useEffect(() => {
    setLike(likeStatus.likeCount);
  }, [likeStatus]);

  const handleToggleLike = (Id) => {
    toggleLike(Id);
  };

  const handleToggleDislike = (Id) => {
    toggleDislike(Id);
  };
  console.log({Comp:likeStatus})

  return (
    <>
      <div className="border-2 p-0 flex justify-evenly items-center h-10 w-36 rounded-full">
        <div className="flex justify-center items-center gap-1 rounded-l-full hover:bg-white hover:text-black m-0">
          {likeStatus.isLiked === true ? (
            <BiSolidLike
              className="h-9 w-10 p-1 cursor-pointer"
              onClick={() => handleToggleLike(videoId)}
            />
          ) : (
            <BiLike
              className="h-9 w-10 p-1 cursor-pointer"
              onClick={() => handleToggleLike(videoId)}
            />
          )}
          <h1 className="p-2 font-bold">{like}</h1>
        </div>
        <div className="h-full w-0.5 bg-white"></div>
        <div className="flex justify-center cursor-pointer rounded-r-full hover:bg-white hover:text-black w-full">
          {likeStatus.isDisliked === true ? (
            <BiSolidDislike
              className="h-9 w-10 p-1 "
              onClick={() => handleToggleDislike(videoId)}
            />
          ) : (
            <BiDislike
              className="h-9 w-10 p-1"
              onClick={() => handleToggleDislike(videoId)}
            />
          )}
        </div>
      </div>
    </>
  );
}
