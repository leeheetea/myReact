import { createContext, useState } from "react";

//context 구조화
const ThemeContext = createContext({
  state: { isDark: false },
  action: { setIsDark: () => {} },
});

// provider 생성
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const value = {
    state: { isDark },
    action: { setIsDark },
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// consumer 생성
const ThemeConsumer = ThemeContext.Consumer;

//export
export { ThemeProvider, ThemeConsumer };
export default ThemeContext;
