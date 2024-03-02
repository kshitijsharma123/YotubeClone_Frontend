import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userDataContext from "../context/userContext";

function DropdownMenu() {
  const { getUser,user } = useContext(userDataContext)

  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }, [])
  const  {avatar, islogged, fullName, username} =user
  


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-2 py-2 text-white rounded-full focus:outline-none"
        >
          {islogged ? (
            <img
              src={avatar}
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg4U3gB48ZkiCXqC-TIgxH5yPgxMmAtJJMQEU_L8tzY2meTG2eVMzoz-t_5UH95fUXB8&usqp=CAU"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
          )}
        </button>

        {isOpen && (
          <div
            onMouseLeave={() => setIsOpen(false)}
            className="origin-top-right absolute right-3 mt-2 w-48  shadow-lge ring-1 ring-black ring-opacity-5  bg-white rounded-lg text-black"
          >
            <div className="flex justify-start m-2">
              {islogged ? (
                <>
                  <img
                    src={avatar}
                    alt="profilePhoto"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-5 ">
                    <h4 className="font-medium">{fullName}</h4>
                    <h3 className="font-normal">{username}</h3>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={
                      "https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
                    }
                    alt="profilePhoto"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-5 ">
                    <h4 className="font-medium">Name</h4>
                    <h3 className="font-normal">Username</h3>
                  </div>
                </>
              )}
            </div>

            <div className="bg-black h-0.5 w-full rounded-xl"></div>

            <div className="flex justify-start m-2 ">
              {islogged ? (
                <>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/exit-512.png"
                    alt="logout Icon"
                    className="h-6 w-6 mr-10"
                  />
                  <Link className="font-bold " to="/logout">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <img
                    src="https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg"
                    alt="Login Icon"
                    className=" h-6 w-7 mr-10"
                  ></img>
                  <Link className="font-bold" to="/login">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DropdownMenu;
