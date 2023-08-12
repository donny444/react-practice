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