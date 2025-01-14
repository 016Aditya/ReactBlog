import Navbar from "./components/shared/Navbar"
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <h1>This is a test</h1>
    </>
  )
}


export default Layout
