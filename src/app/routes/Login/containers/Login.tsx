import * as React from 'react';
import { push } from 'react-router-redux';
import { connect, Dispatch } from 'react-redux';
import LoginForm from 'app/routes/Login/presentation/LoginForm';
import { loginUser } from 'store/actions';
import * as StoreActions from 'store/types/StoreActions';
import * as StoreState from 'store/types/StoreState';
import withFormInputListener, { FormData, FormInputListenerProps } from 'lib/hocs/withFormInputListener';

// Types

interface PropsFromState {
  readonly user: StoreState.User;
}

interface PropsFromDispatch {
  goToHome: () => void;
  login: (data: FormData) => Promise<any>;
}

interface LoginProps extends PropsFromState, PropsFromDispatch, FormInputListenerProps {
}

interface LoginState {
}

// Component

class Login extends React.Component <LoginProps, LoginState> {
  componentWillMount() {
    const { user, goToHome } = this.props;
    if (user.isAuthenticated) { goToHome(); }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login, formData, goToHome } = this.props;
    login(formData).then(() => goToHome());
  }

  render () {
    const { updateInput, formData } = this.props;
    return (
      <section>
        <LoginForm
          formData={formData}
          inputFields={{name: 'name'}}
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
  login: (data: FormData) => dispatch(loginUser(data)),
});

const ConnectedLogin = connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(Login);

export default withFormInputListener(ConnectedLogin);
