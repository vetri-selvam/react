import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FetchGet from "./FetchGet";
import FetchPost from "./FetchPost";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FetchGet /> */}
      <FetchPost/>
    </>
  );
}

export default App;
