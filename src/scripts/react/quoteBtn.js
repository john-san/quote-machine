import React from 'react'
import { Component } from 'react'

class QuoteBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a id="new-quote" className="btn btn-success" href="#">New quote</a>;
  }
};


export default QuoteBtn;
