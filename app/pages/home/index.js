import React, { Component } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

export default class extends Component {
    constructor(props) {
        super(props);
        this.info = this.info.bind(this);
    }

    // componentDidMount() {
    //     axios.get('http://g.cn').then(da => {
    //         console.log(da);
    //     });
    // }

    async componentDidMount() {
        let da = await axios.get('http://g.cn');
        console.log(da);
    }

    info() {
        message.info('This is a normal message');
    }

    render() {
        return <div>
            <h2>i am index</h2>
            <p>now you are in index page!</p>
            <Button type="primary" onClick={this.info}>Display normal message</Button>
        </div>;
    }
}