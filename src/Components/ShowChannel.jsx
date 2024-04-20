import { Link } from "react-router-dom";


function ShowChannel({ data }) {
  if (!data) return;

  const { _id, avatar, username } = data?.owner;

  return (
    <>
      <div className="flex m-0 p-1 gap-6">
        <div className="h-16 w-16">
          <img
            src={avatar}
            alt="avatar"
            className="h-14 w-14 rounded-full object-cover cursor-pointer"
          />
        </div>
        <div className="text-white flex-col">
          <Link to={`/channel/${_id}`}>
            <h1 className=" font-semibold text-2xl cursor-pointer">
              {username}{" "}
            </h1>
          </Link>
          <h1 className="font-bold text-sm">123123</h1>
        </div>

        <div className=" ml-10 mt-1">
          <button
            className="text-white bg-red-800  hover:bg-red-700
          rounded-2xl p-2 w-44 h-auto font-semibold text-l"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default ShowChannel;
