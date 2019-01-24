import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from "antd";

const ITEMS = [
	{
		title: '首页',
		link: '/',
		icon: '',
		key: '/'
	}
];

export default class MenuComponent extends PureComponent {
	constructor(props) {
		super(props);
		this.itemRender = this.itemRender.bind(this);
	}

	itemRender() {
		return ITEMS.map(item => (
			<Menu.Item className="Item" key={item.key}>
				<Link to={item.link}>
					<Icon type="home" /> {item.title}
				</Link>
			</Menu.Item>
		));
	}

	render() {
		return <Menu defaultSelectedKeys={[ITEMS[0].key]} mode="inline" theme="dark">
			{this.itemRender()}
		</Menu>;
	}
}