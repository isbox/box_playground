import { PureComponent, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';
import User from '../user';
import { inject } from "mobx-react";

type props = {
  sideControl: (e: MouseEvent<HTMLElement>) => void
}

@inject((rootStore: mobxStore.rootStore): mobxStore.userInfo.store => rootStore.store.userStore)
export default class Header extends PureComponent<props> {
  static propTypes: { sideControl: PropTypes.Requireable<(...args: any[]) => void>; };
  render() {
    const { sideControl, ...userInfo } = this.props;
    return (
      <Layout.Header className="pl-10 pr-10 flex-row justify-content-between pointer">
        <h3 className="tc-white m-0 flex-row align-items-center">
            <Icon onClick={this.props.sideControl} className="fs-24 mr-10 pointer" type="bars" />
            playground
        </h3>
        <User userInfo={userInfo} />
      </Layout.Header>
    );
  }
}

Header.propTypes = {
  sideControl: PropTypes.func
};
