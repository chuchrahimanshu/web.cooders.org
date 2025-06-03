import React from "react";
import { Router } from "./routes";
import { GlobalProvider } from "./contexts";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
};

export default App;
