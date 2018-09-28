import React from 'react'
import { Component } from 'react'

class QuoteArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div id="text">Quote here</div>
        <div id="author" className="my-2">Author</div>
      </div>
    );
  }
};


export default QuoteArea;
