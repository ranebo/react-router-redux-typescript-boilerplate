import * as React from 'react';
import { History } from 'history';
import routeWrapper from 'app/routes/routeWrapper';

interface HomeProps {
  history: History;
}
const Home = ({ history }: HomeProps) => (
  <section className="fit-center raised lg-pad text-center">
    <p>Hello World </p>
    <button onClick={() => history.push('/counter')}>To Counter</button>
    <button onClick={() => history.push('/todos')}>To Todos</button>
  </section>
);

export default routeWrapper(Home, 'home');
