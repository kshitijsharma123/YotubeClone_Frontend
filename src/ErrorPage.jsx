import { useRouteError } from "react-router-dom";
import Headers from "./Header/Header";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Headers />
      <div className="h-screen flex justify-center text-center">
        <div className="text-white">
          <h1 className="font-bold">Oops!</h1>
          <p className="font-medium">
            Sorry, an unexpected error has occurred.
          </p>
          <p>
            <li>{error.statusText || error.message}</li>
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
