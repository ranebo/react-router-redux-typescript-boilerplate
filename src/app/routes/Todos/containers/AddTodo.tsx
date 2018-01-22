import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'store/actions';
// import * as StoreState from 'types/store/state';

interface AddTodoProps {
  addTodo: (event) => void;
}
class AddTodo extends React.Component<AddTodoProps, {}> {

  addTodo = (event) => {
    console.log(event )
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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

const ConnectedAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default ConnectedAddTodo;
