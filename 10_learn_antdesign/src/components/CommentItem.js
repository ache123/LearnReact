import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'



export default class CommentItem extends PureComponent {
  render() {
    const { avator,  nickname, datetime, comment } = this.props.commentContent;
    return (
      <Comment
        author={<p>{nickname}</p>}
        avatar={<Avatar src={avator} alt= {nickname}/>}
        content={ <p> {comment} </p>}
        datetime={
          <Tooltip title={datetime.format("YYYY-MM-DD")}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions = {[
          <span onClick={e => this.removeItem()}><DeleteOutlined />删除</span>
        ]}
      />
    )
  }

  removeItem() {
    this.props.removeComment();
  }
}
