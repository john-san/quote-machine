import React from 'react'
import { Component } from 'react'
import ButtonRow from './buttonRow'
import QuoteArea from './quoteArea'

class Presentational extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
      		<div id="quote-box" className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            <QuoteArea />
            <ButtonRow />
      		</div>

  			<footer className="mt-3">by <a href="https://github.com/john-san">John Nguyen</a></footer>
  		</div>
    );
  }
};


export default Presentational;
