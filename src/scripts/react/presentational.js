import React from 'react'
import { Component } from 'react'
import { ButtonRow } from './buttonRow.js'
import { QuoteArea } from './quoteArea.js'

class Presentational extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container-fluid">
      		<div id="quote-box" class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            <QuoteArea />
            <ButtonRow />
      		</div>

  			<footer class="mt-3">by <a href="https://github.com/john-san">John Nguyen</a></footer>
  		</div>
    );
  }
};


export { Presentational };
