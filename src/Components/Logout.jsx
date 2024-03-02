import React, { useContext, useEffect, useState } from 'react';
import userDataContext from '../context/userContext';

function Logout() {
  const { logout, logoutStatus } = useContext(userDataContext);
  const [isLoading, setIsLoading] = useState(false);

  const onLogout = async () => {
    try {
    
      setIsLoading(true);
      await logout();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("Running");
    if (logoutStatus === true) {
      window.location.href = "/";
      console.log("Running in Logout==true");
    }
  }, [logoutStatus]);

  const redirectHome = () => {
    window.location.href = "/";
  };

  return (
    <div className='h-screen w-full bg-black opacity-90'>
      <div className="flex h-screen justify-center">
        <div className="h-32 w-96 p-2 m-4 font-seminormal">
          <h1 className='text-3xl text-white'>Want to Logout?</h1>
          <div className="text-l font-semibold">
            <button className='bg-white h-9 w-16 mt-5 mr-5 rounded-md hover:bg-slate-200' onClick={redirectHome}>
              Cancel
            </button>
            <button className='h-9 w-20 text-white rounded-md bg-red-800 hover:bg-red-600' onClick={onLogout} disabled={isLoading}>
              {isLoading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
