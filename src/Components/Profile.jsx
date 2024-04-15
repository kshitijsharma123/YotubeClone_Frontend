import { useContext, useEffect, useState } from "react";
import userDataContext from "../context/userContext";
import Headers from "./../Header/Header";
import { CiEdit } from "react-icons/ci";

export default function Profile() {
  const { getUser, user, getVideoByUser, userVideos } =
    useContext(userDataContext);
  const { avatar, username, fullName, coverImage } = user;

  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }, []);

  useEffect(() => {
    getVideoByUser(username);
  }, [user]);

  return (
    <>
      <Headers />
      <div className="h-5 w-full"></div>
      {/* Cover Image */}
      {coverImage && (
        <div className="flex items-center justify-center w-full h-48	 rounded-xl  p-2">
          <img
            src={coverImage}
            alt="coverimage"
            className="w-11/12 h-full object-cover rounded-2xl"
          />
        </div>
      )}

      <div className="flex">
        <div className="h-auto w-20"></div>
        {/* User */}
        <div className="text-white h-60 w-auto p-2 flex ">
          <div className="h-50 w-50 rounded-full relative">
            <img
              src={avatar}
              alt="avatar"
              className="h-52 w-52 rounded-full p-1 object-cover"
            />
            <div className="absolute top-1 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100  transition-opacity duration-300 rounded-full  ">
              <span className="bg-black opacity-65  p-2 rounded-full">
                <CiEdit className="h-10 w-10" />
              </span>
            </div>
          </div>
          <div className="ml-5 mt-6 flex flex-col">
            <h1 className="font-bold text-4xl pr-2">{fullName}</h1>
            <div className="flex  gap-2">
              <h4 className="font-semibold text-l ">{username}</h4>
              {/* Dot is the below h6 tag */}
              <h6 className=" font-light">‧</h6>
              <h6 className=" font-light">
                {userVideos.numberOfvideo === 1
                  ? "1 video"
                  : ` ${userVideos.numberOfvideo} videos`}
              </h6>
            </div>
            <div className="mt-5 flex gap-4">
              <div
                className=" flex items-center justify-center h-10 w-32 border-1.5 rounded-2xl text-white font-semibold pb-1 bg-slate-400
                
                hover:bg-white 
              hover:opacity-30 hover:text-black
              "
              >
                Customise
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
