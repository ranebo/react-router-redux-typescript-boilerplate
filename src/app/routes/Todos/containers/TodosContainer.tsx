import * as React from 'react';
import { connect } from 'react-redux';
import { removeTodo, TODO_STATUSES } from 'store/actions';
import Todos from 'app/routes/Todos/presentation/Todos';
import Todo from 'app/routes/Todos/presentation/Todo';
import * as StoreState from 'types/store/state';

interface TodoContainerProps {
  todos: StoreState.Todos;
  todoFilter: string;
  removeTodo: (index: any) => void;
}

class TodosContainer extends React.Component<TodoContainerProps, {}> {

  removeTodo = (index) => {
    this.props.removeTodo(index);
  }

  // Handle Todo Components
  getTodos = () => (
    this.props.todos.reduce((todos, todo) => {
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
    }, [])
  )

// ADD IDs
  removeTodoButton = (i) => (
    <button onClick={() => this.removeTodo(i)}>Remove</button>
  )

  render() {
    return (
      <Todos todos={this.getTodos()} />
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: payload => dispatch(removeTodo(payload)),
});

const ConnectedTodos = connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

export default ConnectedTodos;
