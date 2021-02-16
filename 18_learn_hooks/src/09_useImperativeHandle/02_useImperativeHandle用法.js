import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// useImperativeHandle限制父元素行为
const HYInput = forwardRef((props, ref) => {

  const inputRef = useRef();

  // 该函数将第二个参数返回的对象绑定到第一个参数的current中
  // 再通过组件内部自己的ref来调用
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("useImperativeHandle中的回调函数");
      inputRef.current.focus();
    }
  }), [inputRef.current])
  return <input ref={inputRef} type="text" />
})

export default function ForwardRefDemo2() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
