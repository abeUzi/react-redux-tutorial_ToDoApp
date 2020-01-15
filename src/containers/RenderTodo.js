import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';
import {completeTodo} from '../actions';

export default connect(
  state => state,
  dispatch => bindActionCreators({completeTodo}, dispatch)
)(TodoList);
