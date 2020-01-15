import React from 'react';
import Todo from './Todo';

const TodoList = state => {
  return (
    <ul>
      {state.todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => state.completeTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
