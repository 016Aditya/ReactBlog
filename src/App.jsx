import Home from './Pages/Home/Home'
import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import Blog from './Pages/PostDetails/Blog'
import UsersPost from './Pages/PostDetails/UsersPost'
import { LoginForm } from './Pages/LoginPage/LoginForm'
import Navbar from './components/shared/Navbar'
import Rough from './Pages/Rough'
const App = () => {
  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Home/>,


  },
  {
    path :"/blog/:blogId",
    element:<Blog/>,
    children:[
      {
        path:"/blog/:blogId",
        element:<Navbar/>
      }
    ]
  },
  {
    path:"/userId",
    element:<UsersPost/>,
    children:[
      {
        path:"/userId",
        element:<Navbar/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginForm/>,
    children:[
      {
        path:"/login",
        element:<Navbar/>
      }
    ]
  },
  {
    path:"/rough",
    element:<Rough/>
  }
])
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path = "/" element={<Layout><Home/></Layout>}/>
        <Route path = "/blog/:blogId" element={<Layout><Blog/></Layout>}/>
        <Route path="/userId" element={<Layout><UsersPost/></Layout>}></Route>
        <Route path = "/login" element= {<Layout><LoginForm/></Layout>}></Route>
        </Routes>
    </Router> */}
  <RouterProvider router={appRouter}></RouterProvider>

    {/* <Navbar/>
      <div className='mx-14 my-10 '><h1 className='text-7xl font-bold'>Blog</h1></div>
    <Cards/> */}
    {/* <Blog/> */}
    </>
  )
}

export default App
