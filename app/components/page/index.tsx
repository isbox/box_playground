import * as React from 'react';
import './index.less';

export default function Page(): React.ReactElement {
	return (
		<div className="page">
			{this.props.children}
		</div>
	);
}
