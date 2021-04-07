import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import configureStore from './store/configureStore'
import { Container } from '@material-ui/core';
import App from './App';

  const store = configureStore()
    console.log(store.getState())
    store.subscribe(()=>{
    console.log('updated store', store.getState())
  })

ReactDOM.render(
  <Provider store = {store}>
      <BrowserRouter>
          <Container disableGutters>
            <App />
          </Container>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
