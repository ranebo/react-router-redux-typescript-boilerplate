import * as React from 'react';
import routeWrapper from 'lib/hocs/routeWrapper';
import TodosFilter from 'app/routes/Todos/containers/TodosFilter';
import AddTodo from 'app/routes/Todos/containers/AddTodo';
import TodosContainer from 'app/routes/Todos/containers/TodosContainer';
import './styles';

const TodosLayout = () => (
  <React.Fragment>
    <TodosFilter />
    <AddTodo />
    <TodosContainer />
  </React.Fragment>
);

export default routeWrapper(TodosLayout, 'todos');
