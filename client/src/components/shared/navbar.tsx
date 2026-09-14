import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

import { Link, NavLink } from "react-router-dom";

import profileImage from "@/assets/images/dog2.jpeg";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Posts", path: "/posts" },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        {/* Avatar logo */}
        <Avatar asChild size="lg">
          <Link to="/">
            <AvatarImage src={profileImage} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Link>
        </Avatar>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        {/* Navigation - Home, About, Contact, Posts */}
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <div>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "px-2 py-2 text-muted-foreground transition-colors",
                        isActive && "border-b-2 border-primary text-primary"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2 md:flex-row md:gap-4">
        {/* Mobile Navigation */}

        {/* Dropdown menu for mobile */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}

                {menuItems.map((item) => (
                  <DropdownMenuItem asChild key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Theme switcher */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
