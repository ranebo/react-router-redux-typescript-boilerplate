import * as React from 'react';
import { push } from 'react-router-redux';
import { NavLink } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import MainMenu from 'app/containers/MainMenu';
import { logoutUser } from 'store/actions';
import * as StoreActions from 'store/types/StoreActions';
import * as StoreState from 'store/types/StoreState';

// Types

interface PropsFromState {
  readonly user: StoreState.User;
}

interface PropsFromDispatch {
  goToLogin: () => void;
  logout: () => void;
}

interface HeaderProps extends PropsFromState, PropsFromDispatch {
}

interface HeaderState {
}

// Component

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  loggedInMenu() {
    return (
      <div className="pull-right">
        <MainMenu />
        <a onClick={this.props.logout} className="nav-item clickable">
          Logout
        </a>
      </div>
    );
  }

  loggedOutMenu() {
    return (
      <div className="pull-right">
        <a onClick={this.props.goToLogin} className="nav-item clickable">
          Login
         </a>
      </div>
    );
  }

  render() {
    const {  isAuthenticated } = this.props.user;
    return (
      <header id="app-header" className="raised" role="navigation">
        <nav>
          <div>
            <NavLink
              exact={true}
              to="/"
              className="nav-item"
              activeClassName="active-nav-item"
            >
              Home
            </NavLink>
          </div>
          {
            isAuthenticated
            ? this.loggedInMenu()
            : this.loggedOutMenu()
          }
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ user }: StoreState.All): PropsFromState => ({
  user: user,
});

const mapDispatchToProps = (dispatch: Dispatch<StoreActions.LogoutAction>): PropsFromDispatch => ({
  goToLogin: () => dispatch(push('/login')),
  logout: () => dispatch(logoutUser()),
});

const ConnectedHeader = connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
