import React, { useState } from 'react';
import buttons from './buttons';
import '../App.css';

const Keypad = () => {
  const [screenValue, setScreenValue] = useState([]);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const handleClick = (button) => {
    let num1 = 0;
    let num2 = 0;
    let operator = '';
    let index = 0;
    if (button === 'AC') {
      setScreenValue([]);
      return 0;
    }
    const newArr = [...screenValue, button];
    if (button === '=') {
      for (let i = 0; i < newArr.length - 1; i++) {
        if (
          newArr[i] === '+' ||
          newArr[i] === '-' ||
          newArr[i] === '*' ||
          newArr[i] === '/'
        ) {
          operator = newArr[i];
          index = i + 1;
          break;
        } else {
          num1 = num1 * 10 + parseInt(newArr[i]);
        }
      }
      for (let i = index; i < newArr.length - 1; i++) {
        num2 = num2 * 10 + parseInt(newArr[i]);
      }

      setFirstNumber(num1);
      setSecondNumber(num2);

      const result = eval(num1 + operator + num2);

      setScreenValue(result);
      return 0;
    }
    setScreenValue(newArr);
  };

  return (
    <div>
      <div className="screen">
        <h2 className="calculation-preview">{screenValue}</h2>
      </div>
      <div style={{ top: '-30px' }}>
        <ul className="keypad">
          {buttons.map((button, index) => {
            return (
              <button className="btn-container" key={index}>
                <li
                  className="btn"
                  onClick={() => handleClick(button)}
                  value={button}
                >
                  {button}
                </li>
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Keypad;
