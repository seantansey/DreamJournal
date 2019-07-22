import React, { useState } from 'react'
import { View } from 'react-native'
import Collection from './collection'
import Dream from './dream'

const Master = () => {
  const [ showDream, setShowDreamView ] = useState(false)

  const clickDream = () => {
    setShowDreamView(!showDream)
  }

  return (
    <View>
      {showDream ? <Dream /> : <Collection clickDream={clickDream}/>}
    </View>
  )
}

export default Master
