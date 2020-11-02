import React, { useState } from 'react';
import Button from './components/Button';
import styled from 'styled-components';


const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 80%; 
  margin-top: 50px; 
  background-color: #DEDADA;
  color: black;
  border: gray;
  font-size: 60px;
  text-align: right;
  font-family: arial;
`;

const Container = styled.div`
  width: 500px;
  height: 670px;
  background-color: #DEDADA;
  text-align: center;
  font-family: 'Trispace', sans-serif;
  margin: auto;
  margin-top: 50px;
`

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
  const [previousButtonPress, setPreviousButtonPress] = useState('+');
  const [operand, setOperand] = useState(0);

  const handleClear = () => {
    setOperand(0);
    setDisplay(0);
    setTotal(0);
    setOperator('+');
  }

  const handleNumber = number => {
    setPreviousButtonPress(operator)
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
      const newOperand = (operand * 1.0).toFixed(1).toString().split('').slice(0, -1).join('')
      setDisplay(newOperand)
      setOperand(newOperand)
    }
  }

  const handleOperator = symbol => {
    let newTotal = 0;
    if (previousButtonPress === '=') {
      newTotal = calculate(total, symbol, operand)
    } else {
      newTotal = calculate(operand, symbol, total)
    }
    if (symbol === '=') {
      newTotal = calculate(total, operator, operand);
      setPreviousButtonPress(symbol)
    }

    setTotal(newTotal);
    setOperator(symbol)
    setDisplay(newTotal);
    setOperand(0);
  }

  const handlePercent = () => {
    const newOperand = operand / 100;
    setOperand(newOperand);
    setDisplay(newOperand)
  }

  const handleNegative = () => {
    if (previousButtonPress === '=') {
      const newTotal = total * -1;
      setTotal(newTotal);
      setDisplay(newTotal);
    } else {
      const newOperand = operand * -1;
      setOperand(newOperand);
      setDisplay(newOperand);
    }
  }

  return (
    <Container>

      <Input disabled value={display}></Input>
      <Grid>
        <Row>

          <Button onClick={() => { handleClear() }}>C</Button>
          <Button onClick={() => { handleNegative() }}>+/-</Button>
          <Button onClick={() => { handlePercent() }}>%</Button>
          <Button onClick={() => { handleOperator('/') }}>÷</Button>
        </Row>
        <Row>
          <Button onClick={() => { handleNumber(7) }}>7</Button>
          <Button onClick={() => { handleNumber(8) }}>8</Button>
          <Button onClick={() => { handleNumber(9) }}>9</Button>
          <Button onClick={() => { handleOperator('x') }}>x</Button>
        </Row>
        <Row>
          <Button onClick={() => { handleNumber(4) }}>4</Button>
          <Button onClick={() => { handleNumber(5) }}>5</Button>
          <Button onClick={() => { handleNumber(6) }}>6</Button>
          <Button onClick={() => { handleOperator('-') }}>-</Button>
        </Row>
        <Row>
          <Button onClick={() => { handleNumber(1) }}>1</Button>
          <Button onClick={() => { handleNumber(2) }}>2</Button>
          <Button onClick={() => { handleNumber(3) }}>3</Button>
          <Button onClick={() => { handleOperator('+') }}>+</Button>
        </Row>
        <Row>
          <Button onClick={() => { handleNumber(0) }}>0</Button>
          <Button onClick={() => { handleNumber('.') }}>.</Button>
          <Button onClick={() => { handleOperator('=') }}>=</Button>

        </Row>
      </Grid>
    </Container>
  )
}

export default App;
