let todoID = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: todoID++,
  text,
});

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id,
});

export const filterTodo = filterType => ({
  type: 'FILTER_TODO',
  filter: filterType,
});
