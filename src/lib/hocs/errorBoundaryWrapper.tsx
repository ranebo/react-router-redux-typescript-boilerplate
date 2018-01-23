import * as React from 'react';
import ErrorBoundary from 'lib/components/ErrorBoundary';

import RouteError from 'app/routes/RouteError';
const DefaultProdErrorComponent = RouteError;
const DefaultDevErrorComponent = RouteError;

function errorBoundaryWrapper<P>(
  Component: React.ComponentType<P>,
  ProdErrorComponent: React.ComponentType<P> = DefaultProdErrorComponent,
  DevErrorComponent: React.ComponentType<P> = DefaultDevErrorComponent) {
  return class ErrorBoundaryWrapperComponent extends React.Component {
    render() {
      // TODO: Make Default ErrorComponents for Prod and Dev
      const ErrorComponent = process.env.NODE_ENV === 'development' ? DevErrorComponent : ProdErrorComponent;
      return (
        <ErrorBoundary ErrorComponent={ErrorComponent} {...this.props}>
          <Component {...this.props} />
        </ErrorBoundary>
      );
    }
  };
}

export default errorBoundaryWrapper;
