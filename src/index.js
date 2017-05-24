import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import startup from './app/startup';
import store from './app/redux/store';
import App from './app/App';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

startup();
