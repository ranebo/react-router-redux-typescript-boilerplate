import * as React from 'react';

// Types

interface ComponentError {
  error?: Error;
  info?: React.ErrorInfo;
}

interface ErrorBoundaryState extends ComponentError {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  ErrorComponent: React.ComponentType<ComponentError>;
}

// Component

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({hasError: true, error, info});
  }

  render() {
    const {hasError, error, info} = this.state;
    if (hasError && (error !== undefined && info !== undefined)) {
      const {ErrorComponent} = this.props;
      return <ErrorComponent error={error} info={info} {...this.props} />;
    }
    return this.props.children;
  }
}
