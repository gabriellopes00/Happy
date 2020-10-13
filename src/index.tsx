//React imports
  import React from 'react';
  import ReactDOM from 'react-dom';

import App from './App'; //=> Isso é um componente. Ou uma função que retorna html e que pode ser reaproveitada dentro de outras partes do código

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
