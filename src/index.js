import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Routes,Route} from 'react-router-dom';

import './scss/app.scss';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="//*" element={<App />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

