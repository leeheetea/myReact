import { createContext, useState } from 'react';

const ThemeContext = createContext({
  state: { isDark: false },
  action: { setIsDark: () => {} }
});

const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);
  const value = {
    state: { isDark },
    action: { setIsDark }
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

const { Consumer: ThemeConsumer } = ThemeContext;

export { ThemeProvider,  ThemeConsumer};

export default ThemeContext; 