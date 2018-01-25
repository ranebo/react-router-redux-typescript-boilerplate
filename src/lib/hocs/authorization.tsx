import * as React from 'react';
// import * as Loadable from 'react-loadable';
import * as _ from 'lodash';
import { connect, Dispatch } from 'react-redux';
import { replace } from 'react-router-redux';
import { logoutUser } from 'store/actions';
import * as StoreActions from 'store/types/StoreActions';
import * as StoreState from 'store/types/StoreState';

// Types

interface PropsFromState {
  readonly user: StoreState.User;
}

interface PropsFromDispatch {
  goToHome: () => void;
  goToLogin: () => void;
}

interface AuthProps extends PropsFromState, PropsFromDispatch {
}

type WrappedAuthProps<T> = Readonly<T & AuthProps>;

// HoC

function authorization(allowedRoles?: string[]) {
  return function wrapAuthComponent<P extends AuthProps>(WrappedComponent: React.ComponentType) {
    class WithAuthorization extends React.Component<WrappedAuthProps<P>, {}> {
      componentWillMount() {
        this.handleAuthorization(this.props);
      }

      shouldComponentUpdate(nextProps: WrappedAuthProps<P>) {
        return !_.isEqual(nextProps.user, this.props.user);
      }

      componentWillUpdate(nextProps: WrappedAuthProps<P>) {
        this.handleAuthorization(nextProps);
      }

      hasAuth(nextProps: WrappedAuthProps<P>) {
        return nextProps.user.isAuthenticated;
      }

      isAllowed(nextProps: WrappedAuthProps<P>) {
        const roles = nextProps.user.info.roles || [];
        if (allowedRoles && allowedRoles.length) {
          return Boolean(_.intersection(roles, allowedRoles).length);
        }
        return true;
      }

      handleAuthorization(props: WrappedAuthProps<P>) {
        if (!this.hasAuth(props)) {
          props.goToLogin();
        } else if (!this.isAllowed(props)) {
          props.goToHome();
        }
      }

      render() {
        return (
          <WrappedComponent {...this.props} />
        );
      }
    }

    const mapStateToProps = ({ user }: StoreState.All): PropsFromState => ({
      user: user,
    });

    const mapDispatchToProps = (dispatch: Dispatch<StoreActions.ActionTypes>): PropsFromDispatch => ({
      goToHome: () => dispatch(replace('/')),
      goToLogin: () => (dispatch(logoutUser()), dispatch(replace('/login')))
    });

    return connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(WithAuthorization);
  };
}

export default authorization;
