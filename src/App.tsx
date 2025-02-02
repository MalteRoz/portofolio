import React from "react";
import Layout from "./pages/Layout";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
