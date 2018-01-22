import * as React from 'react';
import { TODO_STATUSES } from 'store/actions';

interface TodoProps {
  text: string;
  status: number;
  RemoveTodoButton: any;
}

const Todo = ({ text, status, RemoveTodoButton }: TodoProps) => (
  <div className="todo lg-pad">
    <p>{ text }</p>
    <p>{ TODO_STATUSES[status] }</p>
    <RemoveTodoButton />
  </div>
);

export default Todo;
