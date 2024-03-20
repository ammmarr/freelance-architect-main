import Home from "./pages/Home";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
const routes = [
  {
    name: "projects",
    element: <Projects />,
    href: "/projects",
  },
  {
    name: "Home",
    element: <Home />,
    href: "/",
  },
  {
    name: "Project",
    element: <Project />,
    href: "/project/:id",
  },
];

export default routes;
