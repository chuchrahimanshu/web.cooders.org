import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StructuralLayout } from "../layouts";
import { Home } from "../pages";
import ERDiagram from "../pages/tools/ERDiagram";
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StructuralLayout />}>
          <Route path="" element={<Home />} />
          <Route path="tools/er-diagram" element={<ERDiagram />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
