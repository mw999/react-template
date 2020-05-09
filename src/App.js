import React from "react";

import { useRoutes } from "./hooks/index";

const App = () => {
  const element = useRoutes();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {element}
    </div>
  );
};

export default App;
