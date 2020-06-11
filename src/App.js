import React, {Component} from 'react';
import axios from "axios";
import './css/App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  getData = () => {
    axios({
      "method":"GET",
      "url":"http://quotes.stormconsultancy.co.uk/random.json",
      })
      .then((response)=>{
        console.log(response)
        this.setState({ data : response.data })
      })
      .catch((error)=>{
        console.log(error)
      }
    )
  }

  render() {
    const { author, quote } = this.state.data;

    return (
      <div className="App mt-5 text-center">
        <h1>Quote Machine</h1>
        <div id="quote-box" className="p-5">
          <div id="text" className="text-left">{quote}</div>
          <div id="author" className="text-right">{author}</div>
          <Container>
            <Row>
              <Col>
                <Button 
                    id="new-quote" 
                    variant="success"
                    onClick={this.getData}>New Quote
                </Button>
              </Col>
              <Col><Button id="tweet-quote">Tweet</Button></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
  
}

export default App;
