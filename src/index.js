import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
