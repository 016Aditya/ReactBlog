import { useLocation,Outlet } from "react-router-dom";

const UsersPost = () => {
  const location = useLocation();
  const result = location.state;
  console.log(result)
  return (
    <>
    <Outlet/>
      <div className="w-20 h-20 flex items-center justify-center">
        <h1 className="font-bold text-2xl text-gray-800">Post</h1>
      </div>

      <div className="my-4">
        <h1 className="text-xl font-semibold text-gray-800">Comments</h1>
      </div>

      <div className="my-4">
        <p className="text-gray-700 leading-relaxed">{result[0].body}</p>
      </div>
    </>
  );
};

export default UsersPost
