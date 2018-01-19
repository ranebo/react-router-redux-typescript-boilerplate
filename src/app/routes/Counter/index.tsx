import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { incrementCounter, decrementCounter, CounterAction } from 'store/actions';
import { Store } from 'store/types';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter = ({ count, increment, decrement }: CounterProps) => (
  <section className="fit-center raised lg-pad">
    <p>Count: {count}</p>
    <div className="fit-center">
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  </section>
);

const mapStateToProps = ({ counter }: Store.All) => ({
  count: counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
