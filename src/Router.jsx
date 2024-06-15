import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./screens/Index";
import Home from "./screens/Home";

// export default function Router() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Index />,
//       // errorElement: <ErrorScreen/>,
//       children: [
//         { index: true, element: <Home /> },
//         // {path:"post", element:<Home/>}
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      // errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <Home /> },
        // { path: "cart", element: <CartScreen /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
