import React, {useState} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import TabNavigator from './components/navigator'
import firebase from 'firebase'
import FirebaseApp from './components/fire'


let App = () => {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
