import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const incVal = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decVal = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    }
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={incVal}>Increase Value</button>
      <br /><br />
      
       {/* Disable button if count is 0  */}
      <button onClick={decVal} disabled={count === 0}>
        Decrease Value
      </button>
    </>
  )
}

export default Counter