import React, { useContext } from 'react'


import { UserContex, ThmemContex} from '../App'


export default function ContextHookDemo() {
  const user = useContext(UserContex);
  const theme = useContext(ThmemContex);

  console.log(user, theme)

  return (
    <div>
      <h2>ContextHookDemo</h2>
    </div>
  )
}
