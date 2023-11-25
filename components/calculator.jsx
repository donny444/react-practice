import { useState } from 'react';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [firstOperand, setFirstOperand] = useState(null);
    const [secondOperand, setSecondOperand] = useState(null);
    const [operator, setOperator] = useState(null);

    function handleCalc() {
        switch(operator) {
            case "+":
                setNum(firstOperand + secondOperand); break;
            case "-":
                setNum(firstOperand - secondOperand); break;
            case "*":
                setNum(firstOperand * secondOperand); break;
            case "/":
                setNum(firstOperand / secondOperand); break;
            default:
                break;
        }
    }

    return (
        <div>
            <input type="number" step={0.01} onChange={(e) => setFirstOperand(e.target.value)} required />
            <select onChange={(e) => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" step={0.01} onChange={(e) => setSecondOperand(e.target.value)} required />
            <button onClick={handleCalc}>=</button>
            <p>{num}</p>
        </div>
    )
}