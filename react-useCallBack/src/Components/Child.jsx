import React from "react";

// Only re-render this component if its props change.
const Child = React.memo(function Child({ onClick }) {
  console.log("👶 Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default Child;