import React, { createContext, useState } from "react";


export const ThemeContext = createContext();

export default function Toggle({ children }) {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
