import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "../layouts";
import {
  ChangePassword,
  Community,
  Dashboard,
  ForgetPassword,
  Home,
  Marketplace,
  SignIn,
  SignUp,
  SolveX,
  Studio,
  VerifyOTP,
} from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route path="dashboard" Component={Dashboard} />
          <Route path="studio" Component={Studio} />
          <Route path="community" Component={Community} />
          <Route path="solvex" Component={SolveX} />
          <Route path="marketplace" Component={Marketplace} />
        </Route>
        <Route index Component={Home} />
        <Route path="signup" Component={SignUp} />
        <Route path="signin" Component={SignIn} />
        <Route path="forget-password" Component={ForgetPassword} />
        <Route path="change-password" Component={ChangePassword} />
        <Route path="verify-otp" Component={VerifyOTP} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
