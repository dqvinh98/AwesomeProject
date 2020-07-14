// State
let appState = {
  data: [
    {text: 'buy coffee', isFinish: true},
    {text: 'create an app', isFinish: false},
    {text: 'play on a switch', isFinish: false},
  ],
};

//Reducer
const taskListReducer = (state = appState, action) => {
  let newTaskList = state.data;
  switch (action.type) {
    case 'FINISH':
      newTaskList[action.atIndex].isFinish = !state.data[action.atIndex]
        .isFinish;
      return {...state, data: newTaskList};
    case 'DELETE':
      newTaskList = newTaskList.filter ((item, i) => i !== action.atIndex);
      console.log (`delete: ${JSON.stringify (newTaskList)}`);
      return {...state, data: newTaskList};
    case 'ADD':
      const newTask = {text: action.taskName, isFinish: false};
      return {...state, data: [...state.data, newTask]};
  }
  return state;
};

export default taskListReducer;
