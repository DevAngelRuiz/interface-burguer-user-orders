import React from 'react';
import ReactDOM from 'react-dom/client';
import Globalstyle from './globalStyle';
import MyRoutes from './routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes/>
    <Globalstyle/>
  </React.StrictMode>
);


