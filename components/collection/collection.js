import React, { useEffect } from 'react'
import firebase from 'firebase'
import 'firebase/firestore'

const Collection = () => {
  const count = 0
  const retrieveCollection = (userId) => {
    firebase.firestore().collection('Dreams')
      .where('user', '==', userId)
      // does this even need to be real time?
      .onSnapshot(snapshot => {
        let newDreams = snapshot.docChanges()
        newDreams.forEach(doc => {
          console.log(doc.doc.data())
        })
      })
  }

  useEffect(() => {
    retrieveCollection('N25c9lKITZQ7JtPEZSrMX6uC7Ot2')
  }, [count])

  return (
    null
  )
}

export default Collection
