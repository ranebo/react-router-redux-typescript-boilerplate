import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Types

interface LinkProps {
  readonly to: string;
  readonly exact: boolean;
}

interface Link {
  readonly text: string;
  readonly props: LinkProps;
}

// Component

const links = [
  {
    text: 'Counter',
    props: {
      to: '/counter',
      exact: true,
    }
  },
];

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
