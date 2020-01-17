import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';
import {completeTodo} from '../actions';

const renderTodo = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'Active':
      return todos.filter(t => !t.completed);
    case 'Complete':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

function mapStateToProps(state) {
  return {todos: renderTodo(state.todos, state.filterTodos)};
}

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({completeTodo}, dispatch)
)(TodoList);
