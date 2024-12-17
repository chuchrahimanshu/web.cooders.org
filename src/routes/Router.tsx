import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StructuralLayout } from "../layouts";
import { ERDiagram, Home } from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StructuralLayout />}>
          <Route path="" element={<Home />} />
          <Route path="converters/er-diagram" element={<ERDiagram />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
