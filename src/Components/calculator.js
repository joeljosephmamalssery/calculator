import React from 'react';
import '../App.css';
import Keypad from './keypad';
const Calculator = () => {
  return (
    <div>
      <article className="calculator-body">
        <h1>Calculator</h1>

        <Keypad />
      </article>
    </div>
  );
};
export default Calculator;
