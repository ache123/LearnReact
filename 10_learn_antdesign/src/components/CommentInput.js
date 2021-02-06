import React, { PureComponent } from 'react';
import moment from 'moment';



import { Input, Button } from 'antd';

const { TextArea } = Input;



export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    }
  }
  render() {
    return (
      <div>
        <TextArea rows={4} 
                  cols={30} 
                  value={this.state.comment}
                  onChange={e => this.handleChange(e)}/>
        <Button type="primary" style={{top: "10px"}} onClick={e => this.addComment()}>添加评论</Button>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avator: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      nickname: "ache",
      datetime: moment(),
      comment: this.state.comment
    }

    this.props.submitComment(commentInfo);
    this.setState({
      comment: ""
    })
  }
}
