import React from 'react';
import { Spinner } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group'

export default function QuoteBox({quote, author}) {
  return (
    <div id="quote-box" className="p-md-5">
      {
        quote ?
          <>
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionLeave={false}>
              <div id="text" key={quote}><p>{quote}</p></div>
              <div id="author" className="text-right" key={author}>{author}</div>
            </CSSTransitionGroup>
          </>
          :
          <Spinner animation="border" />
      }

    </div>
  );
}