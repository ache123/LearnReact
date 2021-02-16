import React, { useState, useEffect, useLayoutEffect} from 'react'

export default function LayoutEffectCounterDemo() {
  const [counter, setCounter] = useState(10);

  // counter直接是随机数，因为useLayoutEffect在渲染前执行
  useLayoutEffect(() => {
    if(counter === 0) {
      setCounter(Math.random() + 200);
    }
  }, [counter]);

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(0)}>+1</button>
    </div>
  )
}
