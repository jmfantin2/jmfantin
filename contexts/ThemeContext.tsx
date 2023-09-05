import { createContext, ReactNode, useContext } from 'react';
import { useState } from 'react';

type Theme = {
  title: string;
};

type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const initialTheme = { title: 'LIGHT' };

  const [theme, setTheme] = useState(initialTheme);

  function toggleTheme() {
    if (theme.title === 'LIGHT') {
      setTheme({ title: 'DARK' });
    } else {
      setTheme({ title: 'LIGHT' });
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
