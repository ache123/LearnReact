import React, { useEffect, useState } from 'react'
import useScrollPositon from '../hooks/scroll-position-hook'

export default function CustomScrollPositionHook() {
  const positon = useScrollPositon();


  return (
    <div style={{padding: "1000px 0"}}>
      <h2 style={{ position: "fixed", left: 0, top: 0 }}>CustomScrollPositionHook: {positon}</h2>
    </div>
  )
}
