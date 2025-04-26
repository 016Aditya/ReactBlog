import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 6;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    getPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-14 mt-8">
        {currentPosts.map((post) => (
          <Cards key={post.id} data={post} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>
        <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
        <Button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
      <footer className="mt-12 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </footer>
    </>
  );
};

export default Home;