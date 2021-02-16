import React, { useCallback, useState } from 'react'

export default function CallbackHookDemo01() {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    console.log("increment1")
    setCount(count + 1)
  }

  // 不依赖时，函数得到的count一直是最初的0
  // 依赖了count时与上面普通的函数没有性能优化，在组件重新渲染时都会重新渲染
  const increment2 = useCallback(() => {
    console.log("increment2")
    setCount(count + 1)
  }, [count])


  return (
    <div>
      <h2>CallbackHookDemo01: {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  )
}
