import * as React from 'react';
import ErrorBoundary from 'lib/components/ErrorBoundary';

import RouteError from 'app/routes/RouteError';
const DefaultProdErrorComponent = RouteError;
const DefaultDevErrorComponent = RouteError;

type WrappedComponent<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

function errorBoundaryWrapper<P>(
  Component: WrappedComponent<P>,
  ProdErrorComponent: WrappedComponent<P> = DefaultProdErrorComponent,
  DevErrorComponent: WrappedComponent<P> = DefaultDevErrorComponent) {
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
