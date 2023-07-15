import { useState, createContext } from 'react'
import Button from './components/Button.tsx';
import './App.css'

import { type ThemeContextType } from './types/types.ts';
//import MyComponent from './components/NewComponent.tsx';

const ThemeContext = createContext<ThemeContextType>("light");

function App() {
  const [theme, setTheme] = useState<ThemeContextType>("light");
      
  return (
    <ThemeContext.Provider value={theme}>
      {/* <MyComponent /> */}
      <Button onClick={() => {
        setTheme((theme) => theme === "light" ? "dark" : "light");
      }}>
        {theme}
      </Button>
    </ThemeContext.Provider>
  );
    
}

export default App
