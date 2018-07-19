import React, { Component } from 'react';

// export default function asyncComponent(com) {
//     class AsyncComponent extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 com: null
//             };
//         }
//
//         async componentDidMount() {
//             const { default: component } = await com();
//             console.log(component);
//             // const { default: component } = await com;
//             // this.setState({
//             //     com: component
//             // });
//         }
//
//         render() {
//             const C = this.state.com;
//             // console.log(C);
//             return C ? <C {...this.props} /> : <div>dsfsdf</div>;
//         }
//     }
//
//     return AsyncComponent;
// }


export default function asyncComponent(importComponent) {

    class AsyncComponent extends Component {

        constructor(props) {
            super(props);

            this.state = {
                component: null,
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component: component
            });
        }

        render() {
            const C = this.state.component;

            return C
                ? <C {...this.props} />
                : null;
        }

    }

    return AsyncComponent;
}