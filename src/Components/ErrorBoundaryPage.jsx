import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  const handleCatch = (error) => {
    setError(error);
    console.error("Error caught by ErrorBoundary:", error);
  };

  return (
    <div>
      {error ? (
        <h1>Error: {error.message}</h1>
      ) : (
        <div>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              onError: handleCatch,
            });
          })}
        </div>
      )}
    </div>
  );
};

const ErrorPage = ({ onError }) => {
  try {
    throw new Error("Something went wrong...");
  } catch (error) {
    onError(error);
  }

  return null;
};

const ErrorBoundaryPage = () => {
  return (
    <div>
      <h1>Error Boundary</h1>
      <ErrorBoundary>
        <ErrorPage />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryPage;
