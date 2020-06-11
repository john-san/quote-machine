import React from 'react';
import { Spinner } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group'

export default function QuoteBox({quote, author}) {
  return (
    <div id="quote-box" className="p-5">
      {
        quote ?
          <>
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionLeave={false}>
              <div id="text" key={quote}>{quote}</div>
              <div id="author" className="text-right" key={author}>{author}</div>
            </CSSTransitionGroup>
          </>
          :
          <Spinner animation="border" />
      }

    </div>
  );
}