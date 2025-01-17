import {combineReducers} from 'redux';
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'COMPLETE_TODO':
      state[action.id].completed = true;
      const newState = [].concat(state);
      return newState;
    // return state.map(todo =>
    //   todo.id === action.id ? {...todo, completed: !todo.completed} : todo
    // );
    default:
      return state;
  }
};

const filterTodos = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_TODO':
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  filterTodos,
});
