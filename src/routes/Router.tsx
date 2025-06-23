import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CommunityLayout, GlobalLayout, StudioLayout } from "../layouts";
import {
  ChangePassword,
  Community,
  CommunityChat,
  CommunityDiscussions,
  CommunityGroups,
  CommunityOneToOne,
  CommunityProfile,
  CommunityQNA,
  CommunityResources,
  CommunitySettings,
  CommunityShowcase,
  CommunitySnippets,
  CommunityTrending,
  Dashboard,
  ForgetPassword,
  Home,
  Marketplace,
  SignIn,
  SignUp,
  SolveX,
  Studio,
  StudioAntDesign,
  StudioBuilder,
  StudioChakraUI,
  StudioHeadlessUI,
  StudioHeroUI,
  StudioMaterialUI,
  StudioPrimeReact,
  StudioProfile,
  StudioRadixUI,
  StudioSettings,
  StudioShadCN,
  VerifyOTP,
} from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route path="dashboard" Component={Dashboard} />
          <Route path="studio" Component={StudioLayout}>
            <Route path="" Component={Studio} />
            <Route path="builder" Component={StudioBuilder} />
            <Route path="material-ui" Component={StudioMaterialUI} />
            <Route path="shadcn" Component={StudioShadCN} />
            <Route path="prime-react" Component={StudioPrimeReact} />
            <Route path="ant-design" Component={StudioAntDesign} />
            <Route path="chakra-ui" Component={StudioChakraUI} />
            <Route path="radix-ui" Component={StudioRadixUI} />
            <Route path="headless-ui" Component={StudioHeadlessUI} />
            <Route path="hero-ui" Component={StudioHeroUI} />
            <Route path="profile" Component={StudioProfile} />
            <Route path="settings" Component={StudioSettings} />
          </Route>
          <Route path="community" Component={CommunityLayout}>
            <Route path="" Component={Community} />
            <Route path="chats" Component={CommunityChat} />
            <Route path="groups" Component={CommunityGroups} />
            <Route path="trending" Component={CommunityTrending} />
            <Route path="discussions" Component={CommunityDiscussions} />
            <Route path="snippets" Component={CommunitySnippets} />
            <Route path="qna" Component={CommunityQNA} />
            <Route path="showcase" Component={CommunityShowcase} />
            <Route path="resources" Component={CommunityResources} />
            <Route path="one-to-one" Component={CommunityOneToOne} />
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
