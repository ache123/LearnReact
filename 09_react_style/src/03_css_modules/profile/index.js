import React, { PureComponent } from 'react'

import style from './style.module.css'

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={style.title}>我是Profile的标题</h2>
        <ul className={style.setting}>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}
