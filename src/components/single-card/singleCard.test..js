import React from 'react';
import ReactDOM from 'react-dom';
import cardCanvas from './cardCanvas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<cardCanvas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
