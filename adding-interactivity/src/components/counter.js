import { useState } from 'react';

export function Increment({ children, n}) {
    const [num, setNum] = useState(0);

    function handleClick() {
        setNum(num + n);
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export function IncrementBar() {
    return (
        <>
            <Increment n={1}>Increase 1</Increment>
            <Increment n={2}>Increase 2</Increment>
            <Increment n={3}>Increase 3</Increment>
        </>
    )
}

export function Decrement({ onMinus, children }) {
    return <button onClick={onMinus}>{children}</button>
}

export function DecrementBar() {
    const [num, setNum] = useState(50);

    return (
        <div>
            <h1>{num}</h1>
            <Decrement onMinus={() => setNum(num-1)}>Decrese 1</Decrement>
            <Decrement onMinus={() => setNum(num-2)}>Decrese 2</Decrement>
            <Decrement onMinus={() => setNum(num-3)}>Decrese 3</Decrement>
        </div>
    )
}

export default function Counter() {
    const [num, setNum] = useState(0);

    function handlePlus() {
        setNum(num + 1);
    }
    
    function handleMinus() {
        setNum(num - 1);
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={handlePlus}>Increase 1</button>
            <button onClick={handleMinus}>Decrease 1</button>
        </div>
    )
}