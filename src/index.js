import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { styles } from './scss/main.scss';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

// Webpack Hot Module Replacement
if (module.hot) module.hot.accept('./App', () => render(App));