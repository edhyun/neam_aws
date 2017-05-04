import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import './index.css';

import Store from './store'

import * as firebaseActions from './actions/firebase'

const StoreInstance = Store()

StoreInstance.subscribe(() => {
  console.log('new client state', StoreInstance.getState())
})

function render(){
  ReactDOM.render(
    <Provider store={StoreInstance}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

firebaseActions.fetchData(StoreInstance.dispatch)
.then(() => render())
.catch(error => console.log(error))