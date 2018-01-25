import * as React from 'react';

export interface FormData {
  [key: string]: string | number | string[] | undefined;
}

export interface FormInputListenerProps {
  formData: FormData;
  populateInputs: (inputs: FormData) => void;
  updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function withFormInputListener<P extends FormInputListenerProps>
  (WrappedComponent: React.ComponentType<P>) {
    return class LogIn extends React.Component {
      constructor (props: P) {
        super(props);
        this.state = {};
      }

      populateInputs = (inputs: FormData) => {
        this.setState(inputs);
      }

      updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const t = e.target;
        this.setState({ [t.name]: t.value });
      }

      render () {
        return (
          <WrappedComponent
            {...this.props}
            formData={this.state}
            populateInputs={this.populateInputs}
            updateInput={this.updateInput}
          />
        );
      }
    };
  }

export default withFormInputListener;
