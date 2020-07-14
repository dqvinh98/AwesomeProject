import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import Counter from '../todoAppComponents/Counter';
import {addCounter, subCounter} from '../actions/counterAction';

function CounterContainer(props) {
    const {addCount, subCount} = props;
    const {number} = props.number;
  return (
      <Counter val={number} {...props} />
  );
}




export default connect(state => {
  return {
      number: state.number
  }
}, dispatch => {
  return {
      addCount: (num) => dispatch(addCounter(num)),
      subCount: (num) => dispatch(subCounter(num))
  }
})(CounterContainer);
