import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initialState } from './Reducer';
import reducer from './Reducer'
import { StateProvider } from './Store';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

