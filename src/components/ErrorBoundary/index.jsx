import { ErrorBoundary as ErrorHandler } from 'react-error-boundary';
import { Result } from 'antd';

import Button from 'components/Button';

function Fallback({ error, resetErrorBoundary }) {
  return (
    <Result
      status="500"
      title="There are some problems with your operation."
      extra={
        <Button onClick={resetErrorBoundary} type="primary" key="console">
          Try again
        </Button>
      }
    />
  );
}

const ErrorBoundary = ({ children }) => {
  const logError = (error, info) => {
    // Do something with the error, e.g. log to an external API
    console.log('ErrorBoundary :: logError', error, info);
  };
  return (
    <ErrorHandler
      FallbackComponent={Fallback}
      onError={logError}
      onReset={details => {
        console.log('ErrorBoundary :: details', details);
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorHandler>
  );
};

export default ErrorBoundary;
