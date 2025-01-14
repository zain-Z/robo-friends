import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { robots } from './robots';
import App from './containers/App';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App robots={robots}/>
  </React.StrictMode>
);


reportWebVitals();
