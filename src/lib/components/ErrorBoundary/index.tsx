import * as React from 'react';

interface ErrorBoundaryProps {
  ErrorComponent: any;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: string;
  info?: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
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
