import { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  // ✅ This function stays the same unless dependencies change
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // no dependencies, so never changes

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Me
      </button>
      <Child onClick={handleClick} />
    </>
  );
}
