import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { Header, Button } from 'react-native-elements'
import firebase from 'firebase'


let Journal = () => {
  let [title, setTitle] = useState('')
  let [dream, setDream] = useState('')
  let [tags, setTags] = useState('')
  let userId = 'N25c9lKITZQ7JtPEZSrMX6uC7Ot2'

  let addDream = () => {
    if (title && dream && tags) {
      firebase.firestore().collection('Dreams')
        .add({
          user: userId,
          title: title,
          dream: dream,
          tags: tags
        })
    } else {
      console.log('Please fill out entire form')
    }
  }

  let submit = () => {
    addDream()
    setTitle('')
    setDream('')
    setTags('')
  }

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: 'Dream Entry',
          style: { color: '#fff', fontSize: 22 } }}
      />
      <View style={styles.form}>
      <Text>Title:</Text>
      <TextInput
        style={styles.title}
        placeholder={' add title...'}
        multiline={true}
        value={title}
        onChangeText={text => setTitle(text)}

      />
      <Text>Dream:</Text>
      <TextInput
        style={styles.journal}
        placeholder={'add your dream...'}
        multiline={true}
        value={dream}
        onChangeText={text => setDream(text)}
      />
      <Text>Tags:</Text>
      <TextInput
        style={styles.title}
        placeholder={' add tags (topic, emotions, people)...'}
        multiline={true}
        value={tags}
        onChangeText={text => setTags(text)}
      />
      <Button
        title='Submit'
        style={styles.button}
        onPress={e => submit()}
      />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  journal: {
    height: '40%',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: 'white',
    color: 'black',
    overflow: 'hidden',
    marginBottom: 2,
    marginTop: 10,
    marginBottom: 10,
    padding: 5
  },
  title: {
    height: '10%',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: 'white',
    color: 'black',
    overflow: 'hidden',
    marginBottom: 2,
    marginTop: 10,
    marginBottom: 10,
    padding: 5
  },
  form: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    margin: 5,
    padding: 5
  },
  container: {
    marginBottom: '8%'
  },
  button: {
    width: '50%'
  }

})

export default Journal
