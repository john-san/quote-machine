import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/App.css';
import { Jumbotron } from 'react-bootstrap';
import QuoteBox from './components/QuoteBox';
import ButtonRow from './components/ButtonRow';
import Footer from './components/Footer';


function App() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [isDisabled, toggleDisabled] = useState(false);

  // grab quote from quote API and update currentQuote
  function getData() {
    toggleDisabled(true); // disable button
    axios({
      "method":"GET",
      "url":"http://quotes.stormconsultancy.co.uk/random.json",
      })
      .then((response)=> {
        // console.log(response);
        setCurrentQuote(response.data);
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(() => setTimeout(() => toggleDisabled(false), 300)) // re-enable button
  }

  // run getData on initial render
  useEffect(() => {
    getData();
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
          getData={() =>getData()} 
          isDisabled={isDisabled}
        />
      </Jumbotron>
      <Footer />
    </div>
  );
  
}

export default App;
