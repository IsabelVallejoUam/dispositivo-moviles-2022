import React from 'react'
import { Text, View } from 'react-native';


export const Sayhi = () => {
  return (
    <View style={{
        flex :1,
        backgroundColor: 'grey',
        justifyContent: 'center'
      }}>
        <Text style={{
        fontSize: 55,
        textAlign: 'center'
      }}> This is my first App using React Native
        </Text>
      </View>
  )
}
