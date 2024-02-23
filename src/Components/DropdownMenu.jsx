import React, { useState } from "react";

function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-2 py-2 text-white rounded-full focus:outline-none"
        >
          <img
            src={props.avatar}
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
        </button>

        {isOpen && (
          <div
            onMouseLeave={() => setIsOpen(false)}
            className="origin-top-right absolute right-3 mt-2 w-48  shadow-lge ring-1 ring-black ring-opacity-5  bg-white rounded-lg text-black"
          >
            <div className="flex justify-start m-2">
              <img
                src={props.avatar}
                alt="profilePhoto"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-5 ">
                <h4 className="font-medium">{props.name}</h4>
                <h3 className="font-normal">{props.username}</h3>
              </div>
            </div>

            <div className="bg-black h-0.5 w-full rounded-xl"></div>

            <div className="flex justify-start m-2 ">
              {props.isLogged ? (
                <>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/exit-512.png"
                    alt="logout Icon"
                    className="h-6 w-6 mr-10"
                  />
                  <a className="font-bold " href="#">
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <img
                    src="https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg"
                    alt="Login Icon"
                    className=" h-6 w-7 mr-10"
                  >
                  <a className="font-bold" href="#">
                    Login
                  </a>
                  </img>
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
