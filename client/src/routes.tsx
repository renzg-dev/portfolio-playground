import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeLayout from "@/layouts/home-layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/NotFoundPage";
import PlaygroundPage from "@/pages/PlaygroundPage";
import LoginPage from "@/pages/LoginPage";
import TypescriptPage from "./pages/TypescriptPage";

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        handle: {
          breadcrumb: "Home",
        },
        children: [
          {
            path: "/about",
            element: <AboutPage />,
            handle: {
              breadcrumb: "About",
            },
          },
        ],
      },

      {
        path: "/playground",
        element: <PlaygroundPage />,
        handle: {
          breadcrumb: "Playground",
        },
      },
      {
        path: "/typescript",
        element: <TypescriptPage />,
        handle: {
          breadcrumb: "Typescript",
        },
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
