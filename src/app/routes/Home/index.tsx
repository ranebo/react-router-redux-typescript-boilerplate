import * as React from 'react';
import { History } from 'history';
import routeWrapper from 'app/routes/routeWrapper';

// Types

interface HomeProps {
  history: History;
}

// Component

const Home = ({ history }: HomeProps) => (
  <section className="fit-center lg-pad text-center">
    <h1 className="lg-pad">Hello World!</h1>
    <button onClick={() => history.push('/counter')}>Check out our Redux Counter</button>
  </section>
);

export default routeWrapper(Home, 'home');
