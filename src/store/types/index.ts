
// Eventually move to `.d.ts` file when large enough
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

export module StoreState {

  export type Counter = { value: number };

  export type All = {
    counter: Counter
  };
}
