import React, { PureComponent } from 'react'
import { 
  // matchRoutes,
  renderRoutes 
} from 'react-router-config'
import { 
  NavLink, 
  // Switch, 
  // Route 
} from 'react-router-dom'

export function AboutHistory(props) {
  return <h2>企业拥有悠久的历史文化</h2>
}
export function AboutCulture(props) {
  return <h2>创新/发展/共赢</h2>
}
export function AboutContact(props) {
  return <h2>联系电话：123456</h2>
}
export function JoinUs(props) {
  return <h2>投递简历aaa</h2>
}

export default class About extends PureComponent {
  render() {
    // 使用renderRoutes时会给props中加入route，而使用switch时没有
    console.log(this.props.route);
    // const branch = matchRoutes(this.props.route.routes, "/about");
    // console.log(branch);
    return (
      <div>
        <h2>About</h2>
        <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
        <NavLink to="/about/culture" activeClassName="about-active">企业文化</NavLink>
        <NavLink to="/about/contact" activeClassName="about-active">联系我们</NavLink>
        <button onClick={e => this.jumpToJoin()}>加入我们</button>

        {/* <Switch>
          <Route exact path="/about" component={AboutHistory} />
          <Route path="/about/culture" component={AboutCulture}/>
          <Route path="/about/contact" component={AboutContact} />
          <Route path="/about/join" component={JoinUs} />
        </Switch> */}

        {renderRoutes(this.props.route.routes)}

      </div>
    )
  }

  jumpToJoin() {
    // console.log(this.props.history)
    // console.log(this.props.location)
    // console.log(this.props.match)
    this.props.history.push("/about/join");
  }
}
