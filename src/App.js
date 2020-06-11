import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/App.css';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';

function App() {
  const [currentQuote, setCurrentQuote] = useState({});

  function getData() {
    axios({
      "method":"GET",
      "url":"http://quotes.stormconsultancy.co.uk/random.json",
      })
      .then((response)=>{
        console.log(response)
        setCurrentQuote(response.data)
      })
      .catch((error)=>{
        console.log(error)
      }
    )
  }

  // run getData on initial render
  useEffect(() => {
    getData();
  }, [])

  const { author, quote } = currentQuote;

  return (
    <Jumbotron className="App mt-5 text-center">
      <h1>Quote Machine</h1>
      <div id="quote-box" className="p-5">
        <div id="text">{quote}</div>
        <div id="author" className="text-right">{author}</div>
        <Container className="mt-3">
          <Row>
            <Col xs={12} sm={6}>
              <Button 
                  id="new-quote" 
                  variant="success"
                  onClick={() => getData()}>New Quote
              </Button>
            </Col>
            <Col xs={12} sm={6}>
              <a href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
                target="_blank"
                id="tweet-quote"
                class="btn btn-primary">Tweet
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <h4 className="text-center">Made by <a href="https://github.com/john-san" target="_blank">John Nguyen</a></h4>
    </Jumbotron>
  );
  
}

export default App;
