import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, ListItem } from 'react-native-elements'
import firebase from 'firebase'
import 'firebase/firestore'

const Collection = (props) => {
  const [ dreams, setDreams ] = useState([])

  useEffect(() => {
    const retrieveCollection = (userId) => {
      firebase.firestore().collection('Dreams')
        .where('user', '==', userId)
        .onSnapshot(snapshot => {
          let newDreams = snapshot.docChanges()
          newDreams.forEach(doc => {
            setDreams(prevDreams => [...prevDreams, doc.doc.data()])
          })
        })
    }
    retrieveCollection('N25c9lKITZQ7JtPEZSrMX6uC7Ot2')
  }, [])

  const showDream = () => {
    props.clickDream()
  }


  const renderDreams = () => {
    return dreams.map((info, i) =>
      <ListItem
        key={i}
        title={info.title}
        style={styles.list}
        onPress={() => showDream()}
        chevron
      />
    )
  }

  return (
    <View>
      <Header
        centerComponent={{
          text: 'Collection',
          style: { color: '#fff', fontSize: 22 } }}
      />
      {renderDreams()}
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    borderWidth: .5,
    borderColor: "grey",
  }
})

export default Collection
