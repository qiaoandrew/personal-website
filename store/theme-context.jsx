import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default ThemeContext;

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => setInitialTheme());

  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.querySelector('html').classList.add('dark');
      setTheme('dark');
    }
  }

  function changeTheme() {
    document.querySelector('html').classList.toggle('dark');

    const newTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
