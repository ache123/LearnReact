import React, { forwardRef, useRef } from 'react'

// forwardRef将ref转发到子组件
const HYInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />
})

// 其中ref.current返回的是DOM元素
export default function ForwardRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
