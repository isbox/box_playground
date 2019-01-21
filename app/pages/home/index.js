import React, { Component } from 'react';
import { Button, message } from 'antd';
import { Link } from 'react-router';
import { bindAll } from 'lodash';
import Page from '@/components/page';
import fetch from '@/lib/fetch';

export default class extends Component {
    constructor(props) {
        super(props);

        bindAll(this, [
            'info',
            'routerWillLeave'
        ]);
    }

    async componentDidMount() {
        // let da = await fetch.get('http://g.cn');
        // console.log(da);
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        );
    }

    routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        console.log('1232131231232');
    }

    info() {
        message.info('This is a normal message');
    }

    render() {
        return <Page>
            <Link to="/">首页</Link> <Link to="/test">test页</Link> <Link to="/test/demo01">demo01页</Link>
            <h2>i am index</h2>
            <p>now you are in index page!</p>
            <Button type="primary" onClick={this.info}>Display normal message</Button>
        </Page>;
    }
}