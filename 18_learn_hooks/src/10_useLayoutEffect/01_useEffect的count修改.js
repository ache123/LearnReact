import React, { useState, useEffect} from 'react'

export default function EffectCounterDemo() {
  const [counter, setCounter] = useState(10);

  // 实际上counter先变成0后变成随机数，因为useEffect是在渲染完后执行
  useEffect(() => {
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
