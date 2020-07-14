import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Alert} from 'react-native';
import Header from './todoAppComponents/Header';
import CounterContainer from './todoAppContainers/CounterContainer';
import TaskListContainer from './todoAppContainers/TaskListContainer';
import AddTodoContainer from './todoAppContainers/AddTodoContainer';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import taskListReducer from './reducers/taskListReducer';
import numberReducer from './reducers/numberReducer';

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
