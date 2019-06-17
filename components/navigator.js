import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Journal from './journal'

const TabNavigator = createBottomTabNavigator({
  Journal: Journal
})

export default createAppContainer(TabNavigator)
