import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, CounterAction } from 'store/actions';
import { StoreState } from 'store/types';

interface CounterProps {
  readonly count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

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

const mapStateToProps = ({ counter }: StoreState.All) => ({
  count: counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
  reset: () => dispatch(resetCounter()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
