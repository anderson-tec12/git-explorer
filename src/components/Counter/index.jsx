import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
      <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter