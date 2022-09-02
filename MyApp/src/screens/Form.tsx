import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const Form = () => {
  const [text, onChangeText] = React.useState('Texto');
  const [number, onChangeNumber] = React.useState('null');

  return (
    <div>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="0"
        keyboardType="numeric"
      />
    </div>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
