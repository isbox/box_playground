import React, { PureComponent } from 'react';
import './index.less';

export default class Page extends PureComponent {
	render() {
		return <div className="page">
			{this.props.children}
		</div>;
	}
}