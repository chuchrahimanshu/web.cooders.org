import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChangePassword,
  ForgetPassword,
  Home,
  SignIn,
  SignUp,
  VerifyOTP,
} from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
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
