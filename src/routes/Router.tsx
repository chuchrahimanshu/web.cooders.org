import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StructuralLayout } from "../layouts";
import { Home } from "../pages";
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StructuralLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
