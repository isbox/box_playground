import * as React from 'react';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
import Page from '@/components/page';

const { Component } = React;

type props = { router };

export default class extends Component<props> {
  constructor(props) {
    super(props);
  }

  componentDidMount = async() => {
    this.props.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    );
  };

  routerWillLeave = (nextLocation) => {
    // 返回 false 会继续停留当前页面，
    // 否则，返回一个字符串，会显示给用户，让其自己决定
    console.log('1232131231232');
  };

  info = ():void => {
    message.info('This is a normal message');
  };

  render() {
    return (
      <Page>
        <Link to="/">首页</Link>1
        <Link to="/test">test页</Link>
        <Link to="/test/demo01">demo01页</Link>
        <h2>i am index</h2>
        <p>now you are in index page!</p>
        <Button href="" onClick={this.info} type="primary">Display normal message</Button>
      </Page>
    );
  }
}
