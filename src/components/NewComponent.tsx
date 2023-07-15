import { useContext } from "react";

import { type ThemeContextType } from '../types/types.ts';


const MyComponent = () => {
  const theme = useContext(ThemeContext);

  return <p>The current theme is {theme}.</p>;
};

export default MyComponent