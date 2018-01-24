import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addTodo } from 'store/actions';
import * as StoreActions from 'store/types/StoreActions';
import * as StoreEntities from 'store/types/StoreEntities';

// Types

interface PropsFromState {
}

interface PropsFromDispatch {
  addTodo: (todo: StoreEntities.TodoFragmentEntity) => void;
}

interface AddTodoProps extends PropsFromState, PropsFromDispatch {
}

// Component

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

const mapStateToProps = (): PropsFromState => ({
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.TodoAction>): PropsFromDispatch => ({
  addTodo: (todo: StoreEntities.TodoFragmentEntity) => dispatch(addTodo(todo)),
});

const ConnectedAddTodo = connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(AddTodo);

export default ConnectedAddTodo;
