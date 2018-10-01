import React from 'react'
import { Component, defaultProps } from 'react'

class QuoteArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="text">{ this.props.quote  }</div>
        <div id="author" className="my-2">{ this.props.author }</div>
      </div>
    );
  }
};

QuoteArea.defaultProps = {
  quote: 'Sample Quote',
  author: 'Sample Author'
}


export default QuoteArea;
