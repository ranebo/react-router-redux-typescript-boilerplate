import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { setTodoFilter } from 'store/actions';
import { TODO_FILTER_OPTIONS } from 'types/Constants';
import * as StoreState from 'types/StoreState';
import * as StoreActions from 'types/StoreActions';

// Types

interface PropsFromState {
  todoFilter: string;
}

interface PropsFromDispatch {
  setTodoFilter: (filter: string) => void;
}

interface TodoFilterProps extends PropsFromState, PropsFromDispatch {
}

// Components

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

const mapStateToProps = ({ todoFilter }: StoreState.All): PropsFromState => ({
  todoFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.SetTodoFilterAction>): PropsFromDispatch => ({
  setTodoFilter: (filter: string) => dispatch(setTodoFilter(filter)),
});

const ConnectedTodosFilter = connect<PropsFromState, PropsFromDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(TodosFilter);

export default ConnectedTodosFilter;
