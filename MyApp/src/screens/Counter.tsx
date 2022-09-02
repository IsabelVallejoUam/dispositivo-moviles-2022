import React, {useState} from 'react'
import { Button, Text, View } from 'react-native';


export const Counter = () => {
    const [count, setCounter] = useState(10);
  return (
    <View style={{
        flex:1,
        backgroundColor: 'grey',
        justifyContent: 'center'
    }}>
        <Text style={{
            textAlign: 'center',
            fontSize: 40,
        }}> Contador {count}</Text>
        <Button
            title='Click me'
            onPress={() => setCounter(count + 1)}
        />
        <Button
            title='No Click me'
            onPress={() => setCounter(count - 1)}
        /> 
    </View>
  )
}
