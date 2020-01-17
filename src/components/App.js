import React from 'react';
import AddTodo from '../containers/AddTodo';

import RenderTodo from '../containers/RenderTodo';
import FilterTodo from '../containers/FilterTodo';

const App = () => (
  <div>
    <AddTodo />
    <RenderTodo />
    <FilterTodo />
  </div>
);

export default App;
