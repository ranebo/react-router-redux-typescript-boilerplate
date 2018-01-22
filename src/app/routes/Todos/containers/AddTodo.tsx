import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'store/actions';

interface AddTodoProps {
  addTodo: (todo) => void;
}
class AddTodo extends React.Component<AddTodoProps, {}> {

  addTodo = (todo) => {
    const payload = { text: 'Thing', title: 'JDLfj' } || todo;
    this.props.addTodo(payload);
  }

  render() {
    return (
      <section className="fit-center">
        <button onClick={ this.addTodo }>
          Add Todo
        </button>
      </section>
    );
  }
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

const ConnectedAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default ConnectedAddTodo;
