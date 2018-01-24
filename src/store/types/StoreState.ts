import { Location } from 'history';
import * as StoreEntities from 'store/types/StoreEntities';

// ================
// Store
// ================

export type Counter = { value: number };
export type TodoFilter = string;
export type Todos = StoreEntities.TodoEntity[];
export type User = {
  readonly isAuthenticated: boolean;
  info: StoreEntities.UserInfoEntity;
}

/**
 * Compiled Store shapes.
 */
export type All = {
  counter: Counter,
  todoFilter: TodoFilter,
  todos: Todos,
  user: User,
  routing: { location: Location }
};
