import React, { useState } from 'react';
import Button from './components/Button'

const calculate = (numberOne, operator, numberTwo) => {
  if (operator === '+') {
    return numberOne + numberTwo;
  }
  if (operator === '-') {
    return numberOne - numberTwo;
  }

  if (operator === '/') {
    if (numberTwo === 0) {
      return numberOne;
    } else {
      return numberOne / numberTwo;
    }
  }

  if (operator === 'x') {
    if (numberTwo === 0) {
      return numberOne;
    } else {
      return numberOne * numberTwo;
    }
  }
  return 0;
}

const App = () => {
  const [total, setTotal] = useState(0);
  const [display, setDisplay] = useState(0);
  const [operator, setOperator] = useState('+');
  // const [previousButtonPress, setPreviousButtonPress] = useState('+');
  const [operand, setOperand] = useState(0);

  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  const rowStyle = {
    display: 'flex'
  }

  const gridCellStyle = {
    flexGrow: '1',
    height: '100px',
    width: '50px',
    margin: '5px'
  }

  const handleNumber = number => {
    const characters = operand.toString().split('');
    if (characters.includes('.')) {
      const newOperand = Number("" + operand + number);
      setOperand(newOperand);
      setDisplay(newOperand);

    } else {
      const newOperand = ((operand * 10) + number);
      setOperand(newOperand);
      setDisplay(newOperand);
    }

    if (number === '.') {
      // removes the trailing 0
      const newOperand = (operand * 1.0).toFixed(1).toString().split('').slice(0, -1).join('')
      setDisplay(newOperand)
      setOperand(newOperand)
    }
  }

  const handleOperator = (symbol) => {
    let newTotal = 0;
    if (symbol === '=') {
      newTotal = calculate(total, operator, operand);
    } else {
      console.log('in else total symbol operand', total, symbol, operand)
      newTotal = calculate(operand, symbol, total)
    }
    setTotal(newTotal);
    setOperator(symbol)
    setDisplay(newTotal);
    setOperand(0);

  }

  return (
    <div style={{ width: '500px' }}>
      <pre>
        display: {display}, operator: {operator}, operand: {operand}, total: {total}
      </pre>
      <input disabled value={display} style={{ width: '100%' }}></input>
      <div style={gridStyle}>
        <div style={rowStyle}>
          <Button onClick={() => { handleNumber(7) }}>7</Button>
          <Button onClick={() => { handleNumber(8) }}>8</Button>
          <Button onClick={() => { handleNumber(9) }}>9</Button>
          <Button onClick={() => { handleOperator('/') }}>÷</Button>
        </div>
        <div style={rowStyle}>
          <Button onClick={() => { handleNumber(4) }}>4</Button>
          <Button onClick={() => { handleNumber(5) }}>5</Button>
          <Button onClick={() => { handleNumber(6) }}>6</Button>
          <Button onClick={() => { handleOperator('x') }}>x</Button>


        </div>
        <div style={rowStyle}>
          <Button onClick={() => { handleNumber(1) }}>1</Button>
          <Button onClick={() => { handleNumber(2) }}>2</Button>
          <Button onClick={() => { handleNumber(3) }}>3</Button>
          <Button onClick={() => { handleOperator('-') }}>-</Button>
        </div>
        <div style={rowStyle}>
          <Button onClick={() => { handleNumber(0) }}>0</Button>
          <Button onClick={() => { handleNumber('.') }}>.</Button>
          <Button onClick={() => { handleOperator('=') }}>=</Button>
          <Button onClick={() => { handleOperator('+') }}>+</Button>
        </div>
      </div>
    </div>
  )
}

export default App;


// multiply, add, subtract, divide
// text input, buttons for each operator, buttons for each number,