import React, { useState } from 'react';


const App = () => {
  const [total, setTotal] = useState(0);
  const [display, setDisplay] = useState(0);
  const [operator, setOperator] = useState('+');

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

  const handleNumber = (number) => {
    //if (display === 0) {
    // setDisplay(number);
    //} else {
    setDisplay((display * 10) + number)

    //}
    if (operator === '+') {
      setTotal(number + total)
    }
    if (operator === '-') {
      setTotal(number - total)
    }
    if (operator === '÷') {
      setTotal(number / total)
    }
    if (operator === 'x') {
      setTotal(number * total)
    }
    // when hit number, set total to number operator total

  }

  const handleOperator = (symbol) => {
    // setTotal(display);
    setDisplay(total)

    // if (symbol === '=') {
    //  
    // }
    // setOperator(symbol);
  }

  return (
    <div style={{ width: '500px' }}>
      <pre>
        display: {display}, operator: {operator}, total: {total}
      </pre>
      <input disabled value={display} style={{ width: '100%' }}></input>
      <div style={gridStyle}>
        <div style={rowStyle}>
          <button style={gridCellStyle} onClick={() => { handleNumber(7) }}>7</button>
          <button style={gridCellStyle} onClick={() => { handleNumber(8) }}>8</button>
          <button style={gridCellStyle} onClick={() => { handleNumber(9) }}>9</button>
          <button style={gridCellStyle} onClick={() => { handleOperator('÷') }}>÷</button>
        </div>
        <div style={rowStyle}>
          <button style={gridCellStyle} onClick={() => { handleNumber(4) }}>4</button>
          <button style={gridCellStyle} onClick={() => { handleNumber(5) }}>5</button>
          <button style={gridCellStyle} onClick={() => { handleNumber(6) }}>6</button>
          <button style={gridCellStyle} onClick={() => { handleOperator('x') }}>x</button>
        </div>
        <div style={rowStyle}>
          <button style={gridCellStyle} onClick={() => { handleNumber(1) }}>1</button>
          <button style={gridCellStyle} onClick={() => { handleNumber(2) }}>2</button>
          <button style={gridCellStyle} onClick={() => { handleNumber(3) }}>3</button>
          <button style={gridCellStyle} onClick={() => { handleOperator('-') }}>-</button>
        </div>
        <div style={rowStyle}>
          <button style={gridCellStyle} onClick={() => { handleNumber(0) }}>0</button>
          <button style={gridCellStyle} onClick={() => { handleNumber('.') }}>.</button>
          <button style={gridCellStyle} onClick={() => { handleOperator('=') }}>=</button>
          <button style={gridCellStyle} onClick={() => { handleOperator('+') }}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App;


// multiply, add, subtract, divide
// text input, buttons for each operator, buttons for each number,