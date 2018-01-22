import * as React from 'react';
import HiddenScrollBarList from 'lib/components/HiddenScrollBarList';

// Is duplicated in Todo.tsx... must find common def
interface TodoProps {
  text: string;
  status: number;
  RemoveTodoButton: any;
}

interface TodosProps {
  todos: React.ReactElement<TodoProps>[];
}

const Todos = ({ todos }: TodosProps) => (
  <section className="fit-center text-center expand">
    <HiddenScrollBarList
      components={todos}
      height="400px"
      width="100%"
      outerClasses="fit-center"
    />
  </section>
);

export default Todos;
