import React from 'react';
import {connect} from 'react-redux';

const AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <form>
        <input />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
