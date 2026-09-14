import { NavLink } from "react-router-dom";
import { Home, User, FolderKanban, FlaskConical, Mail } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: Home,
  },
  {
    label: "About",
    to: "/about",
    icon: User,
  },
  {
    label: "Projects",
    to: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Contact",
    to: "/contact",
    icon: Mail,
  },
  {
    label: "Login",
    to: "/login",
    icon: User,
  },
  // {
  //   label: "Playground",
  //   to: "/playground",
  //   icon: FlaskConical,
  // },
];

export default function FooterNav() {
  return (
    <footer className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "flex items-center gap-1 rounded-2xl border bg-background/80 p-2",
          "shadow-lg backdrop-blur-xl",
          "supports-[backdrop-filter]:bg-background/60"
        )}
      >
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex min-w-16 flex-col items-center gap-1 rounded-xl px-3 py-2",
                "text-muted-foreground transition-all duration-200",
                "hover:bg-muted hover:text-foreground",
                isActive && "bg-primary text-primary-foreground shadow-sm"
              )
            }
          >
            <Icon className="size-4" />
            <span className="text-[10px] font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}
