import React, { createContext, useState, Component } from 'react'

export const TopLevelContext = createContext()

class TopLevelProvider extends Component {
  state = {
    user: 'N25c9lKITZQ7JtPEZSrMX6uC7Ot2'
  }

  render() {
    return (
      <TopLevelContext.Provider value={{...this.state}}>
        {this.props.children}
      </TopLevelContext.Provider>
    )
  }
}

export default TopLevelProvider
