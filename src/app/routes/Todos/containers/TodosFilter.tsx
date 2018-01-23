import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { setTodoFilter, TODO_FILTER_OPTIONS } from 'store/actions';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';

interface StateFromProps {
  todoFilter: string;
}

interface DispatchFromProps {
  setTodoFilter: (filter: string) => void;
}

interface TodoFilterProps extends StateFromProps, DispatchFromProps {
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

const mapStateToProps = (state: StoreState.All): StateFromProps => ({
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.SetTodoFilterAction>): DispatchFromProps => ({
  setTodoFilter: (filter: string) => dispatch(setTodoFilter(filter)),
});

const ConnectedTodosFilter = connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodosFilter);

export default ConnectedTodosFilter;
