import { useEffect, useState } from "react"
import axios from 'axios';
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const [posts, setPosts] = useState({})
  const { blogId } = useParams()
  const [user, setUser] = useState({})
  const [comment, setComment] = useState([])
  const navigate = useNavigate(); 
  
  useEffect(() => {
    const getPost = async () => {
      const fetchPost = await axios.get(`https://dummyjson.com/posts/${blogId}`)
      const fetchedUser = await axios.get(`https://dummyjson.com/users/${fetchPost.data.userId}`)
      const fetchedComment = await axios.get('https://dummyjson.com/posts/1/comments/')
      console.log(fetchedUser.data);
      setComment(fetchPost.data)
      setPosts(fetchPost.data)
      setUser(fetchedUser.data)
      setComment(fetchedComment.data.comments)

    }
    getPost()

  }, [blogId])
  console.log(comment)
  const handleClick = async() => {
    const UsersPost = await axios.get(`https://dummyjson.com/users/${user.id}/posts`);
    console.log(UsersPost.data.posts)
    const result = UsersPost.data.posts;
  navigate('/userId',{ state: result}); // Redirect to '/new-page-path'
  }
  return (
    <>
    <Outlet/>
     <div className="text-center my-6 text-3xl font-semibold text-gray-800">
        <h1>{posts.title}</h1>
      </div>

      <div className="text-center font-light font-serif text-gray-600">
        <h6>
          <div onClick={handleClick} className="cursor-pointer hover:text-gray-800 transition-colors duration-300">
            {user.firstName} {user.lastName}
          </div>
        </h6>
      </div>

      <div className="flex justify-center my-6">
        <img
          className="h-auto w-5/12 rounded-lg shadow-md"
          src="https://zerodha.com/varsity/wp-content/uploads/2024/01/Will-Nominee.jpg"
          alt="Nominee"
        />
      </div>

      <div className="mx-auto w-5/12 my-6 text-gray-700 leading-relaxed">
        <p>{posts.body}</p>
      </div>

      <div className="py-4 border-t border-gray-200">
        <h3 className="font-bold text-gray-800 text-lg">Comments</h3>
      </div>

      <div className="mt-4 space-y-4">
        {comment.map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog
