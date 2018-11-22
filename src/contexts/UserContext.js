import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

export default class UserProvider extends Component {
  render() {
    return (
      <Provider value={{username: 'fast'}}>{this.props.children}</Provider>
    )
  }
}

export {
  UserProvider,
  Consumer as UserConsumer
}