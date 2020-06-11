import React from 'react';

export default function QuoteBox({quote, author}) {
  return (
    <div id="quote-box" className="p-5">
      <div id="text">{quote}</div>
      <div id="author" className="text-right">{author}</div>
    </div>
  );
}