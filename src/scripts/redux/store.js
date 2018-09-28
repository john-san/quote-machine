import { createStore } from 'redux'

const quotes = require('../../assets/quotes.json');
const defaultState = quotes;

const myReducer = (state = defaultState) => {
    return state;
}

const store = createStore(myReducer);


export default store;
