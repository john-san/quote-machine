require('../styles/custom.scss');
import React from 'react'
import ReactDOM from 'react-dom'
import Presentational from './react/presentational';
import store from './redux/store';


console.log(store);
console.log(store.getState());

const root = document.getElementById('root');
ReactDOM.render(<Presentational />, root);
