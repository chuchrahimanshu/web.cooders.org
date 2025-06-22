import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommunityLayout, GlobalLayout } from "../layouts";
import {
  ChangePassword,
  Community,
  CommunityChat,
  CommunityDiscussions,
  CommunityGroups,
  CommunityProfile,
  CommunitySettings,
  CommunityTrending,
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
          <Route path="community" Component={CommunityLayout}>
            <Route path="" Component={Community} />
            <Route path="chats" Component={CommunityChat} />
            <Route path="groups" Component={CommunityGroups} />
            <Route path="trending" Component={CommunityTrending} />
            <Route path="discussions" Component={CommunityDiscussions} />
            <Route path="profile" Component={CommunityProfile} />
            <Route path="settings" Component={CommunitySettings} />
          </Route>
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
