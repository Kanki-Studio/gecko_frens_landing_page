import Market from "src/pages/market";
import Home from "../pages/home";
import Character from "src/pages/character";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/market",
    element: <Market />,
  },
  {
    path: "/gecko/:id",
    element: <Character />,
  },
];
