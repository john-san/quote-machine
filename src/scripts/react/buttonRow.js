import React from 'react'
import { Component } from 'react'

class ButtonRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="clearfix mt-4">
  			<div className="float-left">
  			  <ul className="btn-row">
  			    <li><a id="tweet-quote" className="btn btn-success fab fa-twitter" href="#"></a></li>
  			    <li><a id="tumblrBtn" className="btn btn-success fab fa-tumblr" href="#"></a></li>
  			  </ul>
  			</div>
  			<div className="float-right">
  			  <a id="new-quote" className="btn btn-success" href="#">New quote</a>
  			</div>
			</div>
    );
  }
};


export default ButtonRow;
