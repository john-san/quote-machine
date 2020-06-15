import React, { useState, useEffect } from 'react';
// import {default as data} from './quotes.json';
import './css/App.css';
import { Jumbotron } from 'react-bootstrap';
import QuoteBox from './components/QuoteBox';
import ButtonRow from './components/ButtonRow';
import Footer from './components/Footer';

function App() {
  const [quotes, setQuotes] = useState([{character: "", quote: ""}]);
  const [currentQuote, setCurrentQuote] = useState({character: "", quote: ""});
  const [isDisabled, toggleDisabled] = useState(false);
  
  // gets random number between 0 and [max - 1])
  function getRandomNumber(max) {
    const randomNum = Math.floor(Math.random() * max);
    return randomNum;
  }

  // grab random quote from quotes db
  function getRandomQuote() {
    return quotes[getRandomNumber(quotes.length)];
  }

  // grab quotes & set state
  async function fetchQuotes() {
    const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10";
    const res = await fetch(url); 
    const jsonData = await res.json();
    setQuotes(jsonData);
  }

  // update state + display new quote
  function displayQuote() {
    toggleDisabled(true); // disable button
    setCurrentQuote(getRandomQuote()); // get random quote & set state
    setTimeout(() => toggleDisabled(false), 450); // re-enable button
  }

  // fetch quotes on initial load
  useEffect(() => {
    fetchQuotes();
  }, [])

  // display quote once quotes has been updated
  useEffect(() => {
    displayQuote();
    // eslint-disable-next-line
  }, [quotes])


  const { character: author, quote } = currentQuote;
  
  return (
    <div id="app">
      <Jumbotron id="mainContent" className="text-center">
        <h1>Quote Machine</h1>

        <QuoteBox 
          author={author}
          quote={quote}
        />

        <ButtonRow
          author={author}
          quote={quote}
          displayQuote={() =>displayQuote()} 
          isDisabled={isDisabled}
        />
      </Jumbotron>
      <Footer />
    </div>
  );
  
}

export default App;
