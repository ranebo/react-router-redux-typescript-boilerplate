import * as React from 'react';
import errorBoundaryWrapper from 'lib/hocs/errorBoundaryWrapper';
import RouteError from 'app/routes/RouteError';

// Example of an Higher Order Component (HoC)
// This wraps all app routes in thier own container

function routeWrapper<P>(Component: React.ComponentType<P>, id: string) {
  return class RouteWrapperComponent extends React.Component {
    render() {
      const RouteComponent = errorBoundaryWrapper(Component, RouteError);
      return (
        <main id={`${ id }-container`} className="route-container">
          <RouteComponent {...this.props} />
        </main>
      );
    }
  };
}

export default routeWrapper;
