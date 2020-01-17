import React from 'react';
// import filterTodo from '../containers/FilterTodo';
// import FilterLink from '../containers/FilterLink';
// import {VisibilityFilters} from '../actions';

const Footer = state => (
  <div>
    <span>Show: </span>
    <button
      onClick={() => state.filterTodo('ALL')}
      style={{
        marginLeft: '4px',
      }}>
      ALL
    </button>
    <button
      onClick={() => state.filterTodo('Active')}
      style={{
        marginLeft: '4px',
      }}>
      Active
    </button>
    <button
      onClick={() => state.filterTodo('Complete')}
      style={{
        marginLeft: '4px',
      }}>
      Complete
    </button>
    {/* <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink> */}
  </div>
);

export default Footer;
