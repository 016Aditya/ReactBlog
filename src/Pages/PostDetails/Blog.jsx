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
      try {
        const fetchPost = await axios.get(`https://dummyjson.com/posts/${blogId}`);
        const fetchedUser = await axios.get(`https://dummyjson.com/users/${fetchPost.data.userId}`);
        const fetchedComment = await axios.get(`https://dummyjson.com/posts/${blogId}/comments/`);
        
        setPosts(fetchPost.data);
        setUser(fetchedUser.data);
        setComment(fetchedComment.data.comments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPost();
  }, [blogId]);

  const handleClick = async () => {
    try {
      const UsersPost = await axios.get(`https://dummyjson.com/users/${user.id}/posts`);
      navigate('/userId', { state: UsersPost.data.posts });
    } catch (error) {
      console.error('Error navigating:', error);
    }
  };

  return (
    <>
      <Outlet />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <article className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">{posts.title}</h1>
          <p
            onClick={handleClick}
            className="text-md text-blue-600 mt-3 hover:underline cursor-pointer transition-all duration-200"
          >
            By {user.firstName} {user.lastName}
          </p>
        </article>

        <div className="flex justify-center mb-10">
          <img
            className="h-auto w-full max-w-2xl rounded-xl shadow-lg border border-gray-300 object-cover"
            src="https://zerodha.com/varsity/wp-content/uploads/2024/01/Will-Nominee.jpg"
            alt="Nominee"
          />
        </div>

        <section className="bg-white p-8 rounded-xl shadow-md text-gray-800 leading-relaxed mb-12">
          <p>{posts.body}</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Comments</h3>
          <div className="space-y-5">
            {comment.length === 0 ? (
              <p className="text-gray-500 text-center">No comments yet.</p>
            ) : (
              comment.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-300"
                >
                  <p className="text-gray-700">{item.body}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Blog;
