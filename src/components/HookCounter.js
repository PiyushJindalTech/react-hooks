import { useEffect, useState } from 'react';

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(state => state + 1)
    }, 1000);
    document.title = timer;

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [timer])

  const incrementCountHandler = () => {
    setCount(count + 1)
  }

  const decrementCountHandler = () => {
    setCount(count - 1)
  }

  const incrementByFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount(state => state + 1)
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{timer}</h1>
      <button onClick={incrementCountHandler}>Increment</button>
      <button onClick={decrementCountHandler}>Decrement</button>
      <button onClick={incrementByFiveHandler}>incrementBy5</button>
    </div >
  )
}

export default HookCounter;