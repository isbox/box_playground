import { FunctionComponent } from 'react';
import './index.less';

const Page: FunctionComponent = ({ children }) => (
	<div className="page">
		{children}
	</div>
)

export default Page;
