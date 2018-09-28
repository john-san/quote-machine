import React from 'react'
import { Component } from 'react'

class ButtonRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="clearfix mt-4">
  			<div class="float-left">
  			  <ul class="btn-row">
  			    <li><a id="tweet-quote" class="btn btn-success fab fa-twitter" href="#"></a></li>
  			    <li><a id="tumblrBtn" class="btn btn-success fab fa-tumblr" href="#"></a></li>
  			  </ul>
  			</div>
  			<div class="float-right">
  			  <a id="new-quote" class="btn btn-success" href="#">New quote</a>
  			</div>
			</div>
    );
  }
};


export { ButtonRow };
