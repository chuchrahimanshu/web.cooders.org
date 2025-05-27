import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "../layouts";
import { Home, Studio } from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route index Component={Home} />
          <Route path="studio" Component={Studio} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
