import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function ButtonRow({getData, quote, author, isDisabled}) {

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <Button 
              id="new-quote" 
              variant="success"
              onClick={() => getData()}
              disabled={isDisabled}>New Quote
          </Button>
        </Col>
        <Col xs={12} sm={6}>
          <a href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
            target="_blank"
            id="tweet-quote"
            className="btn btn-primary"
            rel="noopener noreferrer">Tweet
          </a>
        </Col>
      </Row>
    </Container>
  )
}