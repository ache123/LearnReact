import React, { useCallback, useState, memo, useMemo } from 'react'

/**
 * useCallback在什么时候使用？
 * 场景：在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理
 */


const HYButton = memo((props) => {
  console.log("HYButton渲染", props.title)
  return <button onClick={props.increment}>HY+1</button>
})

export default function CallbackHookDemo02() {
  console.log("CallbackHookDemo02渲染")
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true)

  const increment1 = () => {
    console.log("increment1")
    setCount(count + 1)
  }


  const increment2 = useCallback(() => {
    console.log("increment2")
    setCount(count + 1)
  }, [count])

  const increment3 = useMemo(() => {
    return () => {
      console.log("increment2")
      setCount(count + 1)
    }
  }, [count])




  return (
    <div>
      <h2>CallbackHookDemo01: {count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <HYButton title="btn1" increment={increment1}/>
      <HYButton title="btn2" increment={increment2} />
      <HYButton title="btn3" increment={increment3} />

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
