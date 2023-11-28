import { useState } from 'react';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [firstOperand, setFirstOperand] = useState(null);
    const [secondOperand, setSecondOperand] = useState(null);
    const [operator, setOperator] = useState(null);

    function handleCalc() {
        const firstNum = parseFloat(firstOperand);
        const secondNum = parseFloat(secondOperand);

        switch(operator) {
            case "+":
                setNum(firstNum + secondNum); break;
            case "-":
                setNum(firstNum - secondNum); break;
            case "*":
                setNum(firstNum * secondNum); break;
            case "/":
                if(secondNum === 0) {
                    setNum(firstNum / secondNum);
                } else {
                    setNum("Error: Division by zero");
                }
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