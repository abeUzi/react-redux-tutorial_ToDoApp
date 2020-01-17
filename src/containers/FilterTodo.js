import Footer from '../components/Footer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {filterTodo} from '../actions';

export default connect(
  state => state,
  dispatch => bindActionCreators({filterTodo}, dispatch)
)(Footer);
