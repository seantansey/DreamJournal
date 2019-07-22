import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Header, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'


const Dream = (props) => {
  console.log(props.dream)
  return (
    <View>
    <Header
      leftComponent={
        <Icon
        name="arrow-left"
        size={17}
        color="white"
        onPress={() => props.clickDream()}
      />}
      centerComponent={{
        text: 'Dream View',
        style: { color: '#fff', fontSize: 22 } }}
    />
    <Text>Title:</Text>
    <Text>{props.dream.title}</Text>
    <Text>Dream:</Text>
    <Text>{props.dream.dream}</Text>
    <Text>Tags:</Text>
    <Text>{props.dream.tags}</Text>



    </View>
  )
}

export default Dream
