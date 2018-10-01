import React from 'react'
import { Component } from 'react'
import QuoteBtn from './quoteBtn'
import TumblrBtn from './tumblrBtn'
import TwitterBtn from './twitterBtn'

class ButtonRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="clearfix mt-4">
  			<div className="float-left">
  			  <ul className="btn-row">
  			    <li><TwitterBtn /></li>
  			    <li><TumblrBtn /></li>
  			  </ul>
  			</div>
  			<div className="float-right">
  			  <QuoteBtn />
  			</div>
			</div>
    );
  }
};


export default ButtonRow;
