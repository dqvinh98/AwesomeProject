import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import AddTodo from '../todoAppComponents/AddTodo';
import addTask from '../actions/taskLiskAction';

function AddTodoContainer(props) {
    const {submitHandler} = props;
  return (
      <AddTodo submitHandler={submitHandler}/>
  );
}



export default connect(state => {
  return {
  }
}, dispatch => {
  return {
    submitHandler: (name) => dispatch(addTask(name)),
  }
})(AddTodoContainer);
