import { Location } from 'history';
import { PersistedState } from 'redux-persist';

// Store Prop Types
export type Counter = { value: number };
export type Routing = { location: Location };

// Compiled Store
export type Store = {
  counter: Counter,
  routing: Routing,
};

// Persisted Store
export type PersistedStoreState = Store & PersistedState;
