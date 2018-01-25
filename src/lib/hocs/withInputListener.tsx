import * as React from 'react';

export interface InputValues {
  [inputKey: string]: string | number | string[] | undefined;
}

export interface InputListenerProps {
  inputData: InputValues;
  populateInputs: (newState: InputValues) => void;
  updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function withInputListener<P extends InputListenerProps>
  (WrappedComponent: React.ComponentType<P>, inputValues: InputValues) {
    return class LogIn extends React.Component {
      constructor (props: P) {
        super(props);
        this.state = {};
      }

      componentWillMount () {
        this.populateInputs(inputValues);
      }

      populateInputs = (newState: InputValues) => {
        this.setState(newState);
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
            inputData={this.state}
            populateInputs={this.populateInputs}
            updateInput={this.updateInput}
          />
        );
      }
    };
  }

export default withInputListener;
