import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RenderRoutes from './router/routes';

const App = () => {
  return (
    <Provider store={store}>
      <RenderRoutes />
    </Provider>
  );
}

export default App;