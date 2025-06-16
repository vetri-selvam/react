import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* 👇 This wraps your Dashboard (and everything inside it) with a context provider that sends down the theme and the toggleTheme function. */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Dashboard />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
