import React, { Component, ReactNode } from 'react';
import ErrorIndicator from '../error-indicator';

interface ErrorBoundryState {
  hasError: boolean;
}

interface ErrorBoundryProps {
  children?: ReactNode;
}

export default class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
  state: ErrorBoundryState = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
