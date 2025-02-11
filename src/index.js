import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Board } from './board';
import { Card } from './card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Board>
    <Card title="sometitle" fields={{
      "username" : "Gipszkarton Emil",
      "favorite pet" : "parrot"
    }}/>
  </Board>
);

