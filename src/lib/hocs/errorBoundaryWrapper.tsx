import * as React from 'react';
import ErrorBoundary from 'lib/components/ErrorBoundary';

// Example of an Higher Order Component (HoC)
// This wraps a component to catch errors and display a custom error component

function errorBoundaryWrapper<P>(Component: React.ComponentType<P>, ErrorComponent: React.ComponentType<P>) {
  return class ErrorBoundaryWrapperComponent extends React.Component {
    render() {
      return (
        <ErrorBoundary ErrorComponent={ErrorComponent} {...this.props}>
          <Component {...this.props} />
        </ErrorBoundary>
      );
    }
  };
}

export default errorBoundaryWrapper;
