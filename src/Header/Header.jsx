import React from "react";

function Navbar() {
  return (
    <nav
      className="h-14 w-full bg-black bg-opacity-90  flex justify-between items-center text-white
  "
    >
      <div className="ml-2 mr-2  flex justify-start items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
          alt="youtubeLogo"
          srcset=""
          className="h-6 w-full mr-1"
        />
        <h1 className="font-semibold text-xl">YouTube</h1>
      </div>

      <div>Search Component</div>

      <div className="mr-2 ml-2  flex justify-between items-center">
        
      <div className="mr-2 ml-2">
          <img
            src="https://www.shutterstock.com/image-vector/video-vector-icon-on-transparent-600nw-1149433310.jpg"
            alt="notification Icon"
            srcset=""
            className="h-6"
          />
        </div>
        <div className="mr-2 ml-2">
          <img
            src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/4aafa9d2-b74b-48fd-6124-7852e2c91300/public"
            alt="notification Icon"
            srcset=""
            className="h-6"
          />
        </div>
        <div className="ml-7 mr-4">
          <img src="https://images.pexels.com/photos/20175173/pexels-photo-20175173/free-photo-of-a-woman-standing-on-the-beach-with-her-arms-outstretched.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" srcset="" className="h-10 w-10 rounded-full"/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
