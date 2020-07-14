import React from 'react';
import {connect} from 'react-redux';
import TaskList from '../todoAppComponents/TaskList';
import {finishTask, deleteTask} from '../actions/taskLiskAction';

function TaskListContainer (props) {
    const {listData, pressCheck, pressDelete} = props;
  return (
      <TaskList  {...props}/>
    
  );
}

export default connect(state => {
    return {
        listData: state.taskList,
    }
}, dispatch => {
    return {
        pressCheck: (index) => dispatch(finishTask(index)),
        pressDelete: (index) => dispatch(deleteTask(index))
    }
})(TaskListContainer);