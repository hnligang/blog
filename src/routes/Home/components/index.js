import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { Layout, Avatar, Button, Dropdown, Menu, message } from 'antd'
import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout

class Home extends React.Component {

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
              web
              </div>
            <div style={{
              display:'flex',
              flexDirection:'row',
              float:'right',
              alignContent:'center',
              alignItems:'center'
            }}>
              SIGN IN
            </div>
          </Header>
          <Layout >
            MAIN
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


export default Home
