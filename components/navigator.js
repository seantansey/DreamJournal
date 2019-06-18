import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Journal from './journal/journal'
import Collection from './collection/collection'


const TabNavigator = createBottomTabNavigator({
  Journal: Journal,
  Collection: Collection
})

export default createAppContainer(TabNavigator)
