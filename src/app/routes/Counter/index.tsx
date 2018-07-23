import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from 'store/actions';
import routeWrapper from 'app/routes/routeWrapper';
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

interface CounterProps extends PropsFromState, PropsFromDispatch {}

// Component

const Counter = ({ count, increment, decrement, reset }: CounterProps) => (
  <section className="fit-center lg-pad">
    <h1 className="lg-pad text-center">{count}</h1>
    <div className="fit-center">
      <button onClick={decrement}> - </button>
      <button onClick={reset}> Reset </button>
      <button onClick={increment}> + </button>
    </div>
  </section>
);

const mapStateToProps = ({ counter }: StoreState.Store): PropsFromState => ({
  count: counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.ActionTypes>): PropsFromDispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
  reset: () => dispatch(resetCounter()),
});

const ConnectedCounter = connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(Counter);
export default routeWrapper(ConnectedCounter, 'counter');
