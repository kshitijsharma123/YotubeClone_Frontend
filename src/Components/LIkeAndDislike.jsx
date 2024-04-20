import { BiLike, BiDislike } from "react-icons/bi";
import userDataContext from "../context/userContext";
import React from "react";

export default function LIkeAndDislike({videoId,likeCount}) {
  const { islikedAndLikeCount } = React.useContext(userDataContext);
  React.useEffect(() => {
    islikedAndLikeCount(videoId);
  }, []);

  return (
    <>
      <div className=" border-2 p-0 flex jstify-evenly items-center h-10 w-36 rounded-full">
        <div
          className="flex justify-center items-center gap-1 rounded-l-full
        hover:bg-white hover:text-black m-0"
        >
          <BiLike className="h-9 w-10 p-1 cursor-pointer" />
          <h1 className="p-2 font-bold">{likeCount}</h1>
        </div>
        <div className="  h-full w-0.5 bg-white "></div>
        <div
          className=" flex justify-center cursor-pointer rounded-r-full
        hover:bg-white hover:text-black w-full "
        >
          <BiDislike className="h-9 w-10 p-1" />
        </div>
      </div>
    </>
  );
}
