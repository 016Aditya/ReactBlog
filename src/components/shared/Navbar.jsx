import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <div className="flex flex-row mx-14 my-8">
      <div className="flex-1">
        <Link to="/">
          <img src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/modules" className={navigationMenuTriggerStyle()}>Modules</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className={navigationMenuTriggerStyle()}>Contact</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/videos" className={navigationMenuTriggerStyle()}>Videos</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/login" className={navigationMenuTriggerStyle()}>Login</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/blog" className={navigationMenuTriggerStyle()}>Blog</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar;
