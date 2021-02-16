import React from 'react'
import useLocalStorage from '../hooks/local-store-hook'

export default function CustomDataStorageHook() {
  const [name, setName] = useLocalStorage("name");


  return (
    <div>
      <h2>CustomDataStorageHook: {name}</h2>
      <button onClick={e => setName("ch")}>设置Name</button>
    </div>
  )
}
