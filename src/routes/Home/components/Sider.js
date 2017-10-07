import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link, browserHistory } from 'react-router'
import { Menu } from 'antd'

const { SubMenu } = Menu

export default class LeftSider extends React.Component {
  constructor (props) {
    super(props)
    let pathname = props.pathname.split('/')[2]
    let keys = []
    let openKeys = []
    if (pathname === 'recommendColumn' || 'tags') {
      keys = ['recMange', pathname]
      openKeys = keys
    } else {
      keys = [pathname]
    }
    this.state = {
      defaultSelectedKeys: keys,
      openKeys:  openKeys
    }
  }
  onOpenChange = (openKeys) => {
    this.setState({ openKeys })
  }
  render () {
    return (
      <Menu
        mode='inline'
        defaultSelectedKeys={this.state.defaultSelectedKeys}
        defaultOpenKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ height: 1000 }}
      >
        <Menu.Item key='plate' style={styles.itemStyle}>
          <Link to='/admin/plate'>版块管理</Link>
        </Menu.Item>
        <Menu.Item key='hotspot' style={styles.itemStyle}>
          <Link to='/admin/hotspot'>热点管理</Link>
        </Menu.Item>
        <SubMenu key='recMange' title={<spanb style={{ fontSize: 14 }}>推荐管理</spanb>}
          // onTitleClick={() => browserHistory.push('/admin/recMange/tags')}
        >
          <Menu.Item key='banner' style={styles.itemStyle}>
            <IndexLink to='/admin/banner'>banner管理</IndexLink>
          </Menu.Item>
          <Menu.Item key='tags' style={styles.itemStyle}>
            <IndexLink to='/admin/tags'>标签配置</IndexLink>
          </Menu.Item>
          <Menu.Item key='recommendColumn' style={styles.itemStyle}>
            <Link to='/admin/recommendColumn'>推荐专栏管理</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='classSchool' style={styles.itemStyle}>
          <Link to='/admin/classSchool'>校园班级</Link>
        </Menu.Item>
        <Menu.Item key='4' style={styles.itemStyle}>
          <Link to='/admin'>消息管理</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

LeftSider.propTypes = {
  pathname: PropTypes.string
}
const styles = {
  itemStyle: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    fontSize: 14
  }
}
