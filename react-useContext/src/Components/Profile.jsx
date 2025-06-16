import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Profile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          padding: "1rem",
        }}
      >
        <h2>User Profile</h2>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
};

export default Profile;
