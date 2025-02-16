import { createContext, useContext } from "react";

const ThemeContext = createContext("dark");

export default function Context() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme : {theme}</div>;
}
