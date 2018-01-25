import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from 'store/actions';
import routeWrapper from 'lib/hocs/routeWrapper';
import * as StoreState from 'store/types/StoreState';
import * as StoreActions from 'store/types/StoreActions';

// Types

interface PropsFromState {
  readonly count: number;
}

interface PropsFromDispatch {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

interface CounterProps extends PropsFromState, PropsFromDispatch {
}

// Component

const Counter = ({ count, increment, decrement, reset }: CounterProps) => (
  <section className="fit-center raised lg-pad">
    <p className="fit-center">Count: {count}</p>
    <div className="fit-center">
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
      <button onClick={reset}> Reset </button>
    </div>
  </section>
);

const mapStateToProps = ({ counter }: StoreState.All): PropsFromState => ({
  count: counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.CounterAction>): PropsFromDispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
  reset: () => dispatch(resetCounter()),
});

const ConnectedCounter = connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(Counter);
export default routeWrapper(ConnectedCounter, 'counter');
