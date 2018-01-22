import * as React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    text: 'Counter',
    props: {
      to: '/counter',
      exact: true,
    }
  },
  {
    text: 'Todos',
    props: {
      to: '/todos',
      exact: true,
    }
  }
];

interface LinkProps {
  readonly to: string;
  readonly exact: true;
}

interface Link {
  readonly text: string;
  readonly props: LinkProps;
}

const MainMenu = () => (
  <ul className="main-nav">
    {links.map(({ text, props }: Link) =>
      <li key={text}>
        <NavLink
          className="nav-item"
          activeClassName="active-nav-item"
          {...props}
        >
          {text}
        </NavLink>
      </li>
    )}
  </ul>
);

export default MainMenu;
