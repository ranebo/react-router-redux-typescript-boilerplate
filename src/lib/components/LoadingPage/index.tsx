import * as React from 'react';

interface LoadingPageProps {
  error?: boolean;
  timedOut?: boolean;
  pastDelay?:  boolean;
}

// TODO: Clean this up. Used for PersistGate and Loadable... may need to seprate or wrapper to work with both
const LoadingPage = (props: LoadingPageProps = {}) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default LoadingPage;
