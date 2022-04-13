import React, { useState } from "react";
import './style.css'

function Calculator() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState(0);

  const inputNum = (e) => {
    var input = e.target.value;

    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }

  const oneFunction = () => {
    setNumber(1 / number);
  }

  const clear = () =>{
    setNumber(0);
  }

  const clearAll = () => {
    setNumber(0);
    setNumber2(0);
    setOperator(null)
  }
  
  const clearLast = () => {
    const forString = number.toString();
    const lastNumber = forString.slice(0, forString.length - 1);
    setNumber(Number(lastNumber));
  }

  const porcentage = () => {
    setNumber(number / 100);
  }

  const changeSign = () => {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  }

  const operatorHandler = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setNumber2(number);
    setNumber(0);
  }

  const result = () => {
    if (operator === "/") {
      setNumber(number2 / number);
    }
    if (operator === "*") {
      setNumber(number2 * number);
    }
    if (operator === "-") {
      setNumber(number2 - number);
    }
    if (operator === "+") {
      setNumber(parseFloat(number2) + parseFloat(number));
    }
  }

  const square = () => {
    setNumber(number * number);
  }
  const squareRoot = () => {
    setNumber(Math.sqrt(number));
  }

  return (
    <div className="container">
      <div className="calculadora">
        <div className="display">
          <div className="textDisplay">{number}</div>
        </div>
        <div className="buttons">
          <div>
            <button onClick={porcentage}>%</button>
            <button onClick={oneFunction}>1/x</button>
            <button className="numColor" onClick={inputNum} value={7}>
              7
            </button>
            <button className="numColor" onClick={inputNum} value={4}>
              4
            </button>
            <button className="numColor" onClick={inputNum} value={1}>
              1
            </button>
            <button className="numColor" onClick={changeSign}>
              +/-
            </button>
          </div>
          <div>
            <button onClick={clear}>CE</button>
            <button onClick={square}>X²</button>
            <button className="numColor" onClick={inputNum} value={8}>
              8
            </button>
            <button className="numColor" onClick={inputNum} value={5}>
              5
            </button>
            <button className="numColor" onClick={inputNum} value={2}>
              2
            </button>
            <button className="numColor" onClick={inputNum} value={0}>
              0
            </button>
          </div>
          <div>
            <button onClick={clearAll}>C</button>
            <button onClick={squareRoot}>Raiz</button>
            <button className="numColor" onClick={inputNum} value={9}>
              9
            </button>
            <button className="numColor" onClick={inputNum} value={6}>
              6
            </button>
            <button className="numColor" onClick={inputNum} value={3}>
              3
            </button>
            <button className="numColor" onClick={inputNum} value={"."}>
              .
            </button>
          </div>
          <div>
            <button onClick={clearLast}>DEL</button>
            <button onClick={operatorHandler} value={"/"}>
              /
            </button>
            <button onClick={operatorHandler} value={"*"}>
              x
            </button>
            <button onClick={operatorHandler} value={"-"}>
              -
            </button>
            <button onClick={operatorHandler} value={"+"}>
              +
            </button>
            <button className="operacao" onClick={result}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
