import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Categories from "../../pages/Categories/Categories";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/categories/:id", element: <Categories></Categories> },
      { path: "/news/:id", element: <News></News> },
    ],
  },
]);
