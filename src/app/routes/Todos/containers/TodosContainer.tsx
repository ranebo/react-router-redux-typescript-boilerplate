import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { removeTodo, TODO_STATUSES } from 'store/actions';
import Todos from 'app/routes/Todos/presentation/Todos';
import Todo from 'app/routes/Todos/presentation/Todo';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';

interface StateFromProps {
  todos: StoreState.Todos;
  todoFilter: string;
}

interface DispatchFromProps {
  removeTodo: (index: number) => void;
}

interface TodoContainerProps extends StateFromProps, DispatchFromProps {
}

class TodosContainer extends React.Component<TodoContainerProps, {}> {

  removeTodo = (index: number) => {
    this.props.removeTodo(index);
  }

  // Handle Todo Components
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

const mapStateToProps = (state: StoreState.All): StateFromProps => ({
  todos: state.todos,
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.TodoAction>): DispatchFromProps => ({
  removeTodo: (index: number) => dispatch(removeTodo(index)),
});

const ConnectedTodos = connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(TodosContainer);

export default ConnectedTodos;
