require('../styles/custom.scss');
import React from 'react'
import { Presentational } from './react/presentational.js';
import { store } from './redux/store.js';
import ReactDOM from 'react-dom'

console.log(store);
const currentState = store.getState();
console.log(currentState);

const root = document.getElementById('root');
// const presentational = new Presentational;
ReactDOM.render(<Presentational />, root);
