import React from 'react';
import ReactDOM from 'react-dom';
import BookSearchApp from './bookSearchApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookSearchApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});