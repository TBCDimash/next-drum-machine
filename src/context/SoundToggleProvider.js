'use client';

import React, { useCallback } from 'react';

export const SoundToggleContext = React.createContext();

function SoundToggleProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled((prevState) => !prevState);
  }, []);

  return (
    <SoundToggleContext.Provider value={{ isSoundEnabled, toggleSound }}>
      {children}
    </SoundToggleContext.Provider>
  );
}

export default SoundToggleProvider;
