import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";

import Profile from "./Components/Profile.jsx";
import Channel from "./Components/Channel.jsx";

import Test from "./Components/Test.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Logout from "./Components/Logout.jsx";
import Register from "./Components/Register.jsx";
import { UserContextProvider } from "./context/UserContextProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SeachVideos from "./Components/SeachVideos.jsx";
import Watch from "./Components/Watch.jsx";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/video/:videoId",
    element: <Watch />,
  },
  {
    path: "/search/:title",
    element: <SeachVideos />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/channel/:userId",
    element: <Channel />,
  },
  {
    path: "/my-profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserContextProvider>
    /
  </React.StrictMode>
);
