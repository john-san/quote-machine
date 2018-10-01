import React from 'react'
import { Component } from 'react'

class TwitterBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <a id="tweet-quote" className="btn btn-success fab fa-twitter" href="#"></a>;
  }
};


export default TwitterBtn;
