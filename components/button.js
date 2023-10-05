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

export default function App() {
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