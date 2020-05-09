import React from "react";
import { useRoutes as useReactRouterRoutes } from "react-router-dom";

import { Home } from "../Pages/index";

const routes = [{ path: "/", element: <Home /> }];

const useRoutes = () => {
  const element = useReactRouterRoutes(routes);

  return element;
};

export default useRoutes;
export { routes };
