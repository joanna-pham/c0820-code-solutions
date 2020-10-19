import React from 'react';
import ReactDOM from 'react-dom';

const headerTag = React.createElement('h1', null, 'Hello, React!');

const root = document.getElementById('root');

ReactDOM.render(headerTag, root);
