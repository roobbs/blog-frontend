import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./screens/Index";
import Error from "./screens/Error";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import PostDetail from "./screens/PostDetail";
import SignUp from "./screens/Signup";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "posts", element: <Posts /> },
        { path: "posts/:postId", element: <PostDetail /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
