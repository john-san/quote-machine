import React, { useState, useEffect } from 'react';
import {default as data} from './quotes.json';
import './css/App.css';
import { Jumbotron } from 'react-bootstrap';
import QuoteBox from './components/QuoteBox';
import ButtonRow from './components/ButtonRow';
import Footer from './components/Footer';


function App() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [isDisabled, toggleDisabled] = useState(false);
  const { quotes } = data;
  
  // gets random number between 0 and [max - 1])
  function getRandomNumber(max) {
    const randomNum = Math.floor(Math.random() * max);
    return randomNum;
  }

  // grab random quote from quotes db
  function getRandomQuote() {
    return quotes[getRandomNumber(quotes.length)];
  }

  // update state + display new quote
  const displayQuote = () => {
    toggleDisabled(true); // disable button
    setCurrentQuote(getRandomQuote());
    setTimeout(() => toggleDisabled(false), 450); // re-enable button
  }

  // run displayQuote on initial render
  useEffect(() => {
    displayQuote();
  }, [])

  const { author, quote } = currentQuote;

  return (
    <div>
      <Jumbotron className="text-center">
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
