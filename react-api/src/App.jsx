import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FetchGet from "./FetchGet";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FetchGet />
    </>
  );
}

export default App;
