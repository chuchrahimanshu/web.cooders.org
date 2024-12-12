import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StructuralLayout } from "../layouts";
import {
  Authenticate,
  ChangePassword,
  EmailVerification,
  ERDiagram,
  ForgetPassword,
  Home,
  Messaging,
  SignIn,
  SignUp,
  TwoFactorAuthentication,
} from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StructuralLayout />}>
          <Route path="" element={<Home />} />
          <Route path="converters/er-diagram" element={<ERDiagram />} />
          <Route path="accounts" element={<Authenticate />} />
          <Route path="accounts/signup" element={<SignUp />} />
          <Route path="accounts/signin" element={<SignIn />} />
          <Route
            path="accounts/validates/password"
            element={<ForgetPassword />}
          />
          <Route
            path="accounts/validates/email"
            element={<EmailVerification />}
          />
          <Route
            path="accounts/validates/otp"
            element={<TwoFactorAuthentication />}
          />
          <Route
            path="accounts/updates/password"
            element={<ChangePassword />}
          />
          <Route path="community/messaging" element={<Messaging />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
