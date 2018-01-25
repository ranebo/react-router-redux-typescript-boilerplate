import * as React from 'react';
import routeWrapper from 'lib/hocs/routeWrapper';

const Miss404 = () => (
  <section className="raised text-center lg-pad fit-center">
    <h1>404</h1>
    <h3>Page not found</h3>
  </section>
);

export default routeWrapper(Miss404, 'miss-404');
