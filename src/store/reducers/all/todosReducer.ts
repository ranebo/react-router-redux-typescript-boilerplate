import { Reducer } from 'redux';
import * as StoreState from 'store/types/StoreState';
import * as StoreActions from 'store/types/StoreActions';

const initialState: StoreState.Todos = [];

export const todosReducer: Reducer<StoreState.Todos> = (
  state: StoreState.Todos = initialState,
  action: StoreActions.TodoAction): StoreState.Todos => {
  switch (action.type) {
    case StoreActions.TypeKeys.RESET_TODOS:
      return action.todos;
    case StoreActions.TypeKeys.ADD_TODO:
      const todo = Object.assign(
        {},
        action.todo,
        {
          status: (Math.round(Math.random())),
          id: Math.round(Math.random() * Math.random() + Math.random() * Math.random())
        }
       );
      return [...state, todo];
    case StoreActions.TypeKeys.REMOVE_TODO:
      const todos = state.slice();
      todos.splice(action.index, 1);
      return todos;
    default:
      return state;
  }
};

// Problem with dot notation lookup for action types
// import * as StoreState from 'store/types/StoreState';
// import * as StoreActions from 'store/types/StoreActions';
// import createReducer from 'store/reducers/createReducer';

// const initialState: StoreState.Todos = [];

// const todoFilterHandlers = {
//   [StoreActions.TypeKeys.RESET_TODOS](
//     state: StoreState.Todos,
//     action: StoreActions.TodoAction
//   ) {
//     return action.todos;
//   },
//   [StoreActions.TypeKeys.ADD_TODO](
//     state: StoreState.Todos,
//     action: StoreActions.TodoAction
//   ) {
//     const todo = Object.assign(
//       {},
//       action['todo'],
//       {
//         status: (Math.round(Math.random())),
//         id: Math.round(Math.random() * Math.random() + Math.random() * Math.random())
//       }
//      );
//     return [...state, todo];
//   },
//   [StoreActions.TypeKeys.REMOVE_TODO](
//     state: StoreState.Todos,
//     action: StoreActions.TodoAction
//   ) {
//     const todos = state.slice();
//     todos.splice(action['index'], 1);
//     return todos;
//   }
// };

// export const todosReducer =
//   createReducer<StoreState.Todos>(initialState, todoFilterHandlers);
