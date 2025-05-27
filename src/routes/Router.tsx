import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "../layouts";
import { Home } from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
