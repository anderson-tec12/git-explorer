import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>Increments</button>
      <button type="button" onClick={() => setCount(count - 1)}>Decrements</button>
    </div>
  )
}

export default Counter