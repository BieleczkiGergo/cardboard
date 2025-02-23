import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { BasicApp } from './BasicApp';
import { CrudApp } from './CrudApp';
import { Home } from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path='basic' element={ <BasicApp /> }/>
        <Route path='crud' element={ <CrudApp /> }/>

      </Route>
    </Routes>
  </BrowserRouter>
);

