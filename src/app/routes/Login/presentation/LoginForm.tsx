import * as React from 'react';
import { InputValues } from 'lib/hocs/withInputListener';

interface LoginFormProps {
  update: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: InputValues;
}
const LoginForm = ({ inputs, update, submit }: LoginFormProps) => (
  <div>
    <form className="raised fit-center" onSubmit={submit}>
      <label>
        Login:
        <input
          type="text"
          placeholder="Username"
          onChange={update}
          name="name"
          value={inputs.name}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default LoginForm;
