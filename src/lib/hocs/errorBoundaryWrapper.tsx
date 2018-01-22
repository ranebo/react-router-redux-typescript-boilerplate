import * as React from 'react';
import ErrorBoundary from 'lib/components/ErrorBoundary';

import RouteError from 'app/routes/RouteError';
const DefaultProdErrorComponent = RouteError;
const DefaultDevErrorComponent = RouteError;

const errorBoundaryWrapper = (
  Component,
  ProdErrorComponent = DefaultProdErrorComponent,
  DevErrorComponent = DefaultDevErrorComponent) => (
    class ErrorBoundaryWrapperComponent extends React.Component {
      render() {
        // TODO: Make Default ErrorComponents for Prod and Dev
        const ErrorComponent = process.env.NODE_ENV === 'development' ? DevErrorComponent : ProdErrorComponent;
        return (
          <ErrorBoundary ErrorComponent={ErrorComponent} {...this.props}>
            <Component {...this.props} />
          </ErrorBoundary>
        );
      }
    }
  );

export default errorBoundaryWrapper;
