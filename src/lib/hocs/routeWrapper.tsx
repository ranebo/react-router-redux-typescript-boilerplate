import * as React from 'react';
import errorBoundaryWrapper from 'lib/hocs/errorBoundaryWrapper';
import RouteError from 'app/routes/RouteError';

function routeWrapper<P>(Component: React.ComponentType<P>, id: string) {
  return class RouteWrapperComponent extends React.Component {
    // Do stuff with component lifecycle hooks here
    // Route hit analytics
    // Listen for navigation changes
    // examples: https://github.com/LWJGL/lwjgl3-www/blob/master/client/containers/PageView.jsx
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
