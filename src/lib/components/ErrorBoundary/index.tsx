import * as React from 'react';

interface ComponentError {
  error?: Error;
  info?: React.ErrorInfo;
}

type ErrorComponentType<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

interface ErrorBoundaryProps {
  ErrorComponent: ErrorComponentType<ComponentError>;
}

interface ErrorBoundaryState extends ComponentError {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({hasError: true, error, info});
  }

  render() {
    if (
      this.state.hasError &&
      (this.state.error !== undefined && this.state.info !== undefined )
    ) {
      const {ErrorComponent} = this.props;
      const {error, info} = this.state;
      return <ErrorComponent error={error} info={info} {...this.props} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
