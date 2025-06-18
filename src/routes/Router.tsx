import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "../layouts";
import { Home, SignIn, SignUp, Studio } from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route index Component={Home} />
          <Route path="studio" Component={Studio} />
          <Route path="signup" Component={SignUp} />
          <Route path="signin" Component={SignIn} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
