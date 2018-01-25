import { Location } from 'history';
import { PersistedState } from 'redux-persist';
import * as StoreEntities from 'store/types/StoreEntities';

// ================
// Store Props
// ================

export type Counter = { value: number };
export type TodoFilter = string;
export type Todos = StoreEntities.TodoEntity[];
export type User = {
  readonly isAuthenticated: boolean;
  info: StoreEntities.UserInfoEntity;
};
export type Routing = { location: Location };

/**
 * Compiled Store.
 */

export type All = {
  counter: Counter,
  todoFilter: TodoFilter,
  todos: Todos,
  user: User,
  routing: Routing,
};

/**
 * Persisted Store.
 */

export type PersistedStoreState = All & PersistedState;
