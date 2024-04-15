import { useState } from "react";
import userDataContext from "./userContext";
import axios from "axios";

export const UserContextProvider = ({ children }) => {
  const baseULR = "http://localhost:8000/api/v1/";

  const [userStatus, setUserStatus] = useState({
    isRegistered: Boolean,
    islogged: false,
    message: String,
  });

  const [user, setUser] = useState({
    islogged: false,
    avatar: "",
    coverImage: "",
    fullName: "",
    username: "",
    id: 0,
  });

  const [userVideos, setUserVideo] = useState({
    video: [],
    numberOfvideo: 0,
  });
  const [logoutStatus, setlogoutStatus] = useState();

  const login = async (data, password) => {
    try {
      const res = await axios.post(
        `${baseULR}users/login`,
        { data, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setUserStatus({
        islogged: true,
        message: "Success",
      });
      console.log(res);
    } catch (err) {
      const { response } = err;

      if (response.status >= 400) {
        setUserStatus({
          islogged: false,
          message: response.data.data.Data,
        });
      }
    }
  };

  // This is quick fix have to refactor the code later
  const registration = async (
    fullName,
    email,
    username,
    password,
    avatar,
    coverImage
  ) => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("avatar", avatar[0]);
      formData.append("coverImage", coverImage[0]);

      const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
        credentials: "include",
      };

      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        requestOptions
      );

      if (!response.ok) {
        if (response.status === 500) {
          throw new Error("Avatar is requried");
        } else if (response.status === 409) {
          throw new Error(" The User already exits");
        } else if (response.status === 400) {
          throw new Error("Avatar is required");
        }
      }

      setUserStatus({
        isRegistered: true,
        message: "Success",
      });
    } catch (error) {
      setUserStatus({
        isRegistered: false,
        message: error.message,
      });
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get(`${baseULR}users/My-Profile`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        const { _id, username, fullName, avatar, coverImage } =
          res.data.data[0];

        setUser({
          islogged: true,
          avatar: avatar,
          coverImage: coverImage,
          fullName: fullName,
          username: username,
          id: _id,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      const res = await axios.post(
        `${baseULR}users/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("runining logout function");
      if (res.status === 200) setlogoutStatus(true);

      console.log({ res });
    } catch (error) {
      if (error.request >= 400) {
        setlogoutStatus(false);
      } else if (error.request >= 500) {
        window.location.href = "/server-error";
      }
    }
  };

  const getVideoByUser = async (username) => {
    try {
      const res = await axios.get(`${baseULR}users/c/${username}/videos`);
      const data = res.data.data;

      setUserVideo({
        video: data,
        numberOfvideo: data.length,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userDataContext.Provider
      value={{
        login,
        userStatus,
        getUser,
        user,
        logout,
        logoutStatus,
        registration,
        getVideoByUser,
        userVideos
      }}
    >
      {children}
    </userDataContext.Provider>
  );
};
