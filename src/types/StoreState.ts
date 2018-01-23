/**
 * Counter shape.
 */
export interface TodoFragmentEntity {
  text: string;
  title: string;
}

export interface TodoEntity extends TodoFragmentEntity {
  readonly status: number;
  readonly id: number;
}

export type Counter = { value: number };
export type TodoFilter = string;
export type Todos = TodoEntity[];

/**
 * Compiled Store shapes.
 */
export type All = {
  counter: Counter,
  todoFilter: TodoFilter,
  todos: Todos,
  routing: { location: any }
};
