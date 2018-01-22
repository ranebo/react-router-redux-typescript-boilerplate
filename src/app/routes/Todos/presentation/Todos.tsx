import * as React from 'react';
import HiddenScrollBarList from 'lib/components/HiddenScrollBarList';

interface TodosProps {
  todos: any[];
}

const Todos = ({ todos }: TodosProps) => (
  <section className="fit-center text-center expand">
    <HiddenScrollBarList
      components={ todos }
      height='400px'
      width='100%'
      outerClasses="fit-center"
    />
  </section>
);

export default Todos;
