import React, { createContext, useState, type ReactNode } from "react";
import { UI_STUDIOS } from "../data";

interface ContextInterface {
  selectedStudio: any;
  handleStudioSelection: (keyName: string) => void;
}

const GlobalContext = createContext<ContextInterface | undefined>(undefined);

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedStudio, setSelectedStudio] = useState<UIStudiosDataInterface>(
    UI_STUDIOS[0]
  );

  const handleStudioSelection = (keyName: string) => {
    const studioIndex = UI_STUDIOS.findIndex(
      (item) => item.keyName === keyName
    );

    if (studioIndex !== -1) {
      setSelectedStudio(UI_STUDIOS[studioIndex]);
    }
  };

  return (
    <GlobalContext.Provider value={{ selectedStudio, handleStudioSelection }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
