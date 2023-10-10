// Adding event handlers
/*
export default function Button() {
    function handleClick() {
        alert("You clicked me!");
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}
*/

// Naming event handler props
function Button({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

function AlertButton({ message, children }) {
    function handleClick() {
        alert(message)
    }
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export function Toolbar() {
    return (
        <div>
            <AlertButton message="One">1</AlertButton>
            <AlertButton message="Two">2</AlertButton>
            <AlertButton message="Three">3</AlertButton>
        </div>
    )
}

export function Video() {
    return (
        <div>
            <Button onSmash={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onSmash={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}

export function NumBar() {
    function handleClick() {
        alert(`You smashed on some button`)
    }
    return (
        <div Style="background-color: grey">
            <NumButton onSmash={handleClick}>1</NumButton>
            <NumButton onSmash={handleClick}>2</NumButton>
            <NumButton onSmash={handleClick}>3</NumButton>
            <NumButton onSmash={handleClick}>4</NumButton>
            <NumButton onSmash={handleClick}>5</NumButton>
            <NumButton onSmash={handleClick}>6</NumButton>
            <NumButton onSmash={handleClick}>7</NumButton>
            <NumButton onSmash={handleClick}>8</NumButton>
            <NumButton onSmash={handleClick}>9</NumButton>
        </div>
    )
}

function NumButton({onSmash, children}) {
    return (
        <>
            <button onClick={onSmash}>{children}</button>
        </>
    )
}