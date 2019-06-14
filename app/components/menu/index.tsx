import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from "antd";

interface item {
	title: string,
	link: string,
	icon: string,
	key: string
};

const ITEMS: item[] = [
	{
		title: '首页',
		link: '/',
		icon: '',
		key: '/'
	}
];

export default class MenuComponent extends PureComponent<{}> {
	constructor(props: {}) {
		super(props);
	}

	itemRender = () => {
		return ITEMS.map((item: item) => (
			<Menu.Item className="Item" key={item.key}>
				<Link to={item.link}>
					<Icon type="home" /> {item.title}
				</Link>
			</Menu.Item>
		));
	}

	render() {
		return (
			<Menu defaultSelectedKeys={[ITEMS[0].key]} mode="inline">
				{this.itemRender()}
			</Menu>
		);
	}
}
