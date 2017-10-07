import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { Layout, Avatar, Button, Dropdown, Menu, message } from 'antd'
import LeftSider from './sider'
import PropTypes from 'prop-types'
import { getUserInfo } from '../../Login/modules/reducer'
import { loginOut } from '../../Login/modules/action'
import confirm from '../../../components/Dialog/ConfirmDialog2'
import { syncCrosstabOnLogout } from '../../Login/utils/LocalStorageUserInfo'

const { Header, Sider, Content } = Layout

class Home extends React.Component {
  handleLoginOutClick = () => {
    confirm({
      title:'友情提示',
      content:'确定退出登录？',
      cancelText:'取消',
      onOk:() => {
        this.submitConfirmModal()
      }
    })
  }

  submitConfirmModal= () => {
    this.props.loginOut().then((result) => {
      syncCrosstabOnLogout()
      message.success('退出登录成功')
      browserHistory.replace({ pathname:'/login' })
    }).catch((error) => {
      if (error.code !== 200) {
        return (
            message.error(error.message)
        )
      }
    })
  }

  render () {
    const userInfo = this.props.userInfo || {}
    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: 'rgb(39, 179, 223)', padding: '0 20px' }}>
            {/* 12km后台管理系 */}
            <div style={{ display:'flex',
              flexDirection:'row',
              alignItems:'center',
              float:'left',
              color: 'white',
              fontSize: 24,
              fontWeight: 400
            }}>
              12KM后台管理系统
              </div>
            <div style={{
              display:'flex',
              flexDirection:'row',
              float:'right',
              alignContent:'center',
              alignItems:'center'
            }}>
              <Avatar size='large' icon='user' src={userInfo.avatar} />
              <div style={{ marginLeft: 10, color: 'white' }}>{userInfo.username}</div>
              <Dropdown
                overlay={
                  <Menu onClick={this.handleLoginOutClick}>
                    <Menu.Item key='1'>退出登录</Menu.Item>
                  </Menu>} placement='bottomRight'>
                <Button
                  type={'primary'}
                  style={{ marginLeft:20 }} >设置</Button>
              </Dropdown>
            </div>
          </Header>
          <Layout >
            <Sider style={{ backgroundColor: 'white' }} width={200}>
              {<LeftSider pathname={this.props.location.pathname} />}
            </Sider>
            <Content style={{ backgroundColor: 'white', minHeight: 800 }}>{this.props.children}</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
Home.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  loginOut: PropTypes.func,
  userInfo: PropTypes.object
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginOut }, dispatch)
}

const mapStateToProps = (state) => ({
  userInfo : getUserInfo(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
