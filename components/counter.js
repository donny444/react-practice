import { useState } from 'react';

export function Increment() {
    const [num, setNum] = useState(0);

    function handleClick() {
        setNum(num + 1);
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={handleClick}>Increment 1</button>
            <button onClick={handleClick}>Increment 1</button>
            <button onClick={handleClick}>Increment 1</button>
        </div>
    )
}

export function Decrement({onMinus, children}) {
    return <button onClick={onMinus}>{children}</button>
}
export function DecrementBar({onMinus}) {
    const [num, setNum] = useState(50);
    return (
        <div>
            <h1>{num}</h1>
            <Decrement onMinus={() => setNum(num - 1)}>Decrese 1</Decrement>
            <Decrement onMinus={() => setNum(num - 2)}>Decrese 2</Decrement>
            <Decrement onMinus={() => setNum(num - 3)}>Decrese 3</Decrement>
        </div>
    )
}