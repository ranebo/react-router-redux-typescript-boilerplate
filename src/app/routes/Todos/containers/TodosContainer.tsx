import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { removeTodo } from 'store/actions';
import { TODO_STATUSES } from 'constants/todos';
import Todos from 'app/routes/Todos/presentation/Todos';
import Todo from 'app/routes/Todos/presentation/Todo';
import * as StoreState from 'store/types/StoreState';
import * as StoreActions from 'store/types/StoreActions';

// Types

interface PropsFromState {
  todos: StoreState.Todos;
  todoFilter: string;
}

interface PropsFromDispatch {
  removeTodo: (index: number) => void;
}

interface TodoContainerProps extends PropsFromState, PropsFromDispatch {
}

// Component

class TodosContainer extends React.Component<TodoContainerProps, {}> {

  removeTodo = (index: number) => {
    this.props.removeTodo(index);
  }

  // Handle Todo Filters
  getTodos = () => (
    this.props.todos.reduce(
      (todos, todo) => {
        if (
          (this.props.todoFilter === TODO_STATUSES[0] && todo.status) ||
          (this.props.todoFilter === TODO_STATUSES[1] && !todo.status)
        ) {return todos; }

        return [
          ...todos,
          (
            <Todo
              key={Math.random()}
              RemoveTodoButton={() => this.removeTodoButton(todos.length)}
              {...todo}
            />
          )
        ];
      },
      []
     )
  )

// ADD IDs
  removeTodoButton = (i: number) => (
    <button onClick={() => this.removeTodo(i)}>Remove</button>
  )

  render() {
    return (
      <Todos todos={this.getTodos()} />
    );
  }
}

const mapStateToProps = (state: StoreState.All): PropsFromState => ({
  todos: state.todos,
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.TodoAction>): PropsFromDispatch => ({
  removeTodo: (index: number) => dispatch(removeTodo(index)),
});

const ConnectedTodos = connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(TodosContainer);

export default ConnectedTodos;
