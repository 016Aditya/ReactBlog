import { useLocation, Outlet } from "react-router-dom";

const UsersPost = () => {
  const location = useLocation();
  const result = location.state;

  return (
    <>
      <Outlet />
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-900">User's Posts</h1>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {result.map((post, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-md">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersPost;