import React, { useState, useMemo } from 'react';

function calcNumber(count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += i;
  }
  return total
}

export default function MemoHookDemo01() {
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(10);

  // const total = calcNumber(count);

  const total = useMemo(() => {
    console.log("calcNumber计算")
    return calcNumber(count)
  }, [count])

  return (
    <div>
      <h2>计算数字的和： {total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
