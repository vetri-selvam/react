import { useState } from "react";

import "./App.css";
import FormReducer from "./components/FormReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormReducer />
    </>
  );
}

export default App;
