import React, { createContext, useState } from 'react';

export const TopBarContext = createContext();

export const TopBarProvider = (props) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <TopBarContext.Provider value={[activeTab, setActiveTab]}>
      {props.children}
    </TopBarContext.Provider>
  );
};
