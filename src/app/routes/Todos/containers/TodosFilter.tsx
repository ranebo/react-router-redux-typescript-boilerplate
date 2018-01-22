import * as React from 'react';
import { connect } from 'react-redux';
import { setTodoFilter, TODO_FILTER_OPTIONS } from 'store/actions';

interface TodoFilterProps {
  todoFilter: string;
  setTodoFilter: (filter: string) => void;
}

class TodosFilter extends React.Component<TodoFilterProps, {}> {

  renderTodosButtons = () => (
    TODO_FILTER_OPTIONS.map(option => (
      <button
        className={this.props.todoFilter === option ? 'main-btn-active' : 'main-btn'}
        onClick={() => this.props.setTodoFilter(option)}
      >
        {option}
      </button>
    ))
  )

  render() {
    return (
      <section className="fit-center">
        {this.renderTodosButtons()}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = (dispatch) => ({
  setTodoFilter: filter => dispatch(setTodoFilter(filter)),
});

const ConnectedTodosFilter = connect(mapStateToProps, mapDispatchToProps)(TodosFilter);

export default ConnectedTodosFilter;
