import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../todoapp/src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './src/common/Fallback';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary FallbackComponent={Fallback}>
          <AppNavigator />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}