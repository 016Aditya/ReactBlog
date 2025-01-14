import Cards from './Cards'
import { useEffect, useState } from 'react'
import {Button} from '@/components/ui/button'
import axios from 'axios';
import Navbar from '@/components/shared/Navbar';
const Home = () => {
    const [posts,setPosts] = useState([])
    
    useEffect(()=>{
        const getPost = async() =>{
            const fetchPost = await axios.get('https://dummyjson.com/posts')
            console.log(fetchPost);
            setPosts(fetchPost.data.posts)
         }
         getPost()
    },[])
  return (
    <>
    <Navbar/>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-14">
        {
            posts.map((post)=>{return(<Cards data={post}/>)})
        }
    </div>
    </>
  )
}

export default Home
