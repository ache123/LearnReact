import React, { useState, memo, useMemo} from 'react'


// 子组件每次都会渲染，因为传给它的info是局部变量每次都会重新创建
const HYInfo = memo((props) => {
  console.log("HYInfo渲染")
  return <h2>名字： {props.info.name}  年龄： {props.info.age}</h2>
})

export default function MemoHookDemo02() {
  console.log("MemoHookDemo02渲染")
  const [show, setShow] = useState(true)

  // const info = {name:"ch", age:18};

  // useCallback对函数优化返回值只能是函数，useMemo对返回值优化可以是任何类型,可以包含useCallback
  const info = useMemo(() => {
    return { name: "ch", age: 18 }
  }, [])


  return (
    <div>
      <HYInfo info={info}/>
      <button onClick={e => setShow(!show)}>切换</button>

    </div>
  )
}
