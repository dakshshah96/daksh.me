import React, { Component } from 'react'

class UserInfo extends Component {
  render() {
    const { userTwitter } = this.props.config
    const { expanded } = this.props
    return <p>Hello there</p>
  }
}

export default UserInfo
