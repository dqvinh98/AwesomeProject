import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function Counter(props) {
    const {val, addCount, subCount} = props;
  return (
    <View style={styles.containerCounter}>
        <Button
        title="Sub"
        onPress={() => {
          subCount (1);
        }}
      />
        <Text>Counter: {val}</Text>
      <Button
        title="Add"
        onPress={() => {
          addCount (1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  containerCounter: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
});



