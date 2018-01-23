import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addTodo } from 'store/actions';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';

interface StateFromProps {
}

interface DispatchFromProps {
  addTodo: (todo: StoreState.TodoFragmentEntity) => void;
}

interface AddTodoProps extends StateFromProps, DispatchFromProps {
}

class AddTodo extends React.Component<AddTodoProps, {}> {

  addTodo = () => {
    const payload = {text: 'Thing', title: 'JDLfj'};
    this.props.addTodo(payload);
  }

  render() {
    return (
      <section className="fit-center">
        <button onClick={this.addTodo}>
          Add Todo
        </button>
      </section>
    );
  }
}

const mapStateToProps = (): StateFromProps => ({
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.TodoAction>): DispatchFromProps => ({
  addTodo: (todo: StoreState.TodoFragmentEntity) => dispatch(addTodo(todo)),
});

const ConnectedAddTodo = connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(AddTodo);

export default ConnectedAddTodo;
