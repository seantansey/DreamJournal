import React, { useState } from 'react'
import { View } from 'react-native'
import Collection from './collection'
import Dream from './dream'

const Master = () => {
  const [ showDream, setShowDreamView ] = useState(false)
  const [ dream, setDream ] = useState('')

  const clickDream = (dreamText='') => {
    setDream(dreamText)
    setShowDreamView(!showDream)
  }

  return (
    <View>
      {showDream ? <Dream dream={dream} clickDream={clickDream}/> : <Collection clickDream={clickDream}/>}
    </View>
  )
}

export default Master
