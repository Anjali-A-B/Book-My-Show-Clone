/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MovieProvider from './context/Movie.Contexy';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <MovieProvider>
          <App/>
        </MovieProvider> 
      </BrowserRouter>
);


