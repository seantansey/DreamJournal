import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Journal from './journal/journal'
import Master from './collection/master'


const TabNavigator = createBottomTabNavigator({
  Journal: Journal,
  Collection: Master
})

export default createAppContainer(TabNavigator)
