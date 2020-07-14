import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Alert} from 'react-native';
import Header from './TodoApp/todoAppComponents/Header';
import CounterContainer from './TodoApp/todoAppContainers/CounterContainer';
import TaskListContainer from './TodoApp/todoAppContainers/TaskListContainer';
import AddTodoContainer from './TodoApp/todoAppContainers/AddTodoContainer';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import taskListReducer from './TodoApp/reducers/taskListReducer';
import numberReducer from './TodoApp/reducers/numberReducer';

// Store
const store = createStore (combineReducers({taskList: taskListReducer, number: numberReducer}));

export default function App () {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodoContainer  />
          <CounterContainer />
          <View style={styles.list}>
            <TaskListContainer />
          </View>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
