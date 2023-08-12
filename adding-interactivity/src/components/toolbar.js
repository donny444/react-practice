// Reading props in event handlers
/*
function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <AlertButton message="Playing!(edit)">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!(edit)">
                Upload Image
            </AlertButton>
        </div>
    );
}
*/

// Passing event handlers as props
/*
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}
*/

// Event propagation
/*
export default function Toolbar() {
    return (
        <div className="Toolbar" Style="background-color: grey;" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <button onClick={() => alert('Playing!')}>
                Play Movie
            </button>
            <button onClick={() => alert('Uploading!')}>
                Upload Image
            </button>
        </div>
    );
}
*/

// Stopping propagation
function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div className="Toolbar" Style="background-color: grey" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}