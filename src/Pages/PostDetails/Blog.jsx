import { useEffect, useState } from "react";
import axios from 'axios';
import { Outlet, useParams, useNavigate } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState({});
  const { blogId } = useParams();
  const [user, setUser] = useState({});
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const fetchPost = await axios.get(`https://dummyjson.com/posts/${blogId}`);
      const fetchedUser = await axios.get(`https://dummyjson.com/users/${fetchPost.data.userId}`);
      const fetchedComment = await axios.get(`https://dummyjson.com/posts/${blogId}/comments/`);
      setPosts(fetchPost.data);
      setUser(fetchedUser.data);
      setComment(fetchedComment.data.comments);
    };
    getPost();
  }, [blogId]);

  const handleClick = async () => {
    const UsersPost = await axios.get(`https://dummyjson.com/users/${user.id}/posts`);
    navigate('/userId', { state: UsersPost.data.posts });
  };

  return (
    <>
      <Outlet />
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold text-gray-900">{posts.title}</h1>
        <p
          onClick={handleClick}
          className="text-md text-gray-500 mt-2 hover:text-gray-700 cursor-pointer transition-colors duration-300"
        >
          By {user.firstName} {user.lastName}
        </p>
      </div>

      <div className="flex justify-center my-8">
        <img
          className="h-auto w-5/12 rounded-xl shadow-lg border border-gray-200"
          src="https://zerodha.com/varsity/wp-content/uploads/2024/01/Will-Nominee.jpg"
          alt="Nominee"
        />
      </div>

      <div className="mx-auto w-3/5 text-gray-800 text-lg leading-relaxed bg-white p-6 rounded-xl shadow-sm">
        <p>{posts.body}</p>
      </div>

      <div className="mx-auto w-3/5 mt-10 border-t pt-6 border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comments</h3>
        <div className="space-y-4">
          {comment.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm"
            >
              <p className="text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
