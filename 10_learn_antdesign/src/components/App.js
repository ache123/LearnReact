import React, { PureComponent } from 'react'
import CommentInput from './CommentInput'
import CommentItem from './CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      comments: []
    }
  }
  render() {
    return (
      <div style={{width:"500px", padding: "10px"}}>
        {
          this.state.comments.map((item, index) => {
            return <CommentItem key={item.id} commentContent={item} removeComment={e => this.removeComment(index)}/>
          })
        }
        {/* <CommentInput submitComment={info => this.submitComment(info)} /> */}
        <CommentInput submitComment={this.submitComment.bind(this)} />
        
      </div>
    )
  }

  submitComment(info) {
    this.setState({
      comments: [...this.state.comments, info]
    })
  }

  removeComment(index) {
    const newComments =  [...this.state.comments];
    newComments.splice(index, 1);
    this.setState({
      comments: newComments
    })
  }
}
