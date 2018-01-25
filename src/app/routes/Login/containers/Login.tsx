import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import withInputListener, { InputValues, InputListenerProps } from 'lib/hocs/withInputListener';
import { login } from 'store/actions';
import * as StoreState from 'store/types/StoreState';
import { push } from 'react-router-redux';
import LoginForm from 'app/routes/Login/presentation/LoginForm';
import * as StoreActions from 'store/types/StoreActions';

// Types

interface PropsFromState {
  readonly user: StoreState.User;
}

interface PropsFromDispatch {
  goToHome: () => void;
  loginUser: (data: InputValues) => void;
}

interface LoginProps extends PropsFromState, PropsFromDispatch, InputListenerProps {
}

interface LoginState {
}

// Component

class Login extends React.Component <LoginProps, LoginState> {
  componentDidUpdate(prevProps: LoginProps) {
    const { user, goToHome } = this.props;
    if (user.isAuthenticated) { goToHome(); }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginUser, inputData } = this.props;
    loginUser(inputData);
  }

  render () {
    const { updateInput, inputData } = this.props;
    return (
      <section>
        <LoginForm
          inputs={inputData}
          update={updateInput}
          submit={this.handleSubmit}
        />
      </section>
    );
  }
}

const mapStateToProps = ({ user }: StoreState.All): PropsFromState => ({
  user: user,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.ActionTypes>): PropsFromDispatch => ({
  goToHome: () => dispatch(push('/')),
  loginUser: (data: InputValues) => dispatch(login(data)),
});

const ConnectedLogin = connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(Login);

export default withInputListener(ConnectedLogin, {
  name: 'test'
});
