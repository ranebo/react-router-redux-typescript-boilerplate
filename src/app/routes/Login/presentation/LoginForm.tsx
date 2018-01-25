import * as React from 'react';
import { FormData } from 'lib/hocs/withFormInputListener';

interface LoginFormProps {
  update: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputFields: {[key: string]: string};
  formData: FormData;
}
const LoginForm = ({ formData, inputFields, update, submit }: LoginFormProps) => (
  <div>
    <form className="raised fit-center" onSubmit={submit}>
      <label>
        Login:
        <input
          type="text"
          placeholder="Username"
          onChange={update}
          name={inputFields.name}
          value={formData[inputFields.name] || ''}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default LoginForm;
