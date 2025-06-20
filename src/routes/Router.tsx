import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "../layouts";
import {
  ChangePassword,
  ForgetPassword,
  Home,
  SignIn,
  SignUp,
  Studio,
  VerifyOTP,
} from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route index Component={Home} />
          <Route path="studio" Component={Studio} />
          <Route path="signup" Component={SignUp} />
          <Route path="signin" Component={SignIn} />
          <Route path="forget-password" Component={ForgetPassword} />
          <Route path="change-password" Component={ChangePassword} />
          <Route path="verify-otp" Component={VerifyOTP} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
