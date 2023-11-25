import { useState } from 'react';

//Updating the same state multiple times before the next render
export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    )
}

//What happens if you update state after replacing it
export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    )
}

//What happens if you replace state after updating it
export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
                setNumber(42);
            }}>+3</button>
        </>
    )
}

//Naming conventions
export default function Convention() {
    const [enabled, setEnabled] = useState(true);
    const [lastName, setLastName] = useState("Doe");
    const [friendCount, setFriendCount] = useState(4);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setEnabled(e => !e);
                setLastName(ln => ln.reverse());
                setFriendCount(fc => fc * 2);
            }}>Click</button>
        </>
    )
}