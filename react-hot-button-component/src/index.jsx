import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from './hot-button';

// const colors = [
//   { clicks: '0', color: 'buttonDefault' },
//   { clicks: '3', color: 'buttonThree' },
//   { clicks: '6', color: 'buttonSix' },
//   { clicks: '9', color: 'buttonNine' },
//   { clicks: '12', color: 'buttonTwelve' },
//   { clicks: '15', color: 'buttonFifteen' }
// ];

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);

export default CustomButton;
