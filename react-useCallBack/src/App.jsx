import { useState } from 'react'
import Parent from './Components/Parent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parent/>
    </>
  )
}

export default App
