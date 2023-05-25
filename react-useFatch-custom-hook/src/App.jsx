import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Post />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
