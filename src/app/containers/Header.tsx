import * as React from 'react';
import { NavLink } from 'react-router-dom';
import MainMenu from 'app/containers/MainMenu';

interface HeaderProps {
  pathname: string;
}

interface HeaderState {
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  render() {
    return (
      <header id="app-header" className="raised" role="navigation">
        <nav>
          <div>
            <NavLink
              exact
              to="/"
              className="nav-item"
              activeClassName="active-nav-item"
            >
              Home
            </NavLink>
          </div>
          <div className="pull-right">
            <MainMenu />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
