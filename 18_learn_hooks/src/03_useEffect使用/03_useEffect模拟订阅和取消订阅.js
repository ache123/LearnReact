import React, { useEffect, useState } from 'react'

export default function EffectHookCancelDemo() {
  const [count, setCount] = useState(0)

  
  // 第二个空数组表示当前组件重新渲染时不用执行，只有第一次才更新
  // 第二个参数传数组，里面包含需要依赖的变量
  useEffect(() => {
    console.log("订阅一些事件");


    return () => {
      console.log("取消订阅事件")
    }
  }, [])
  return (
    <div>
      <h2>EffectHookCancelDemo</h2>
      <h2>{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}
