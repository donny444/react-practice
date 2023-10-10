function BigTechButton({ browser, children }) {
    function handleClick() {
        alert(`${children} browser: ${browser}`)
    }
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default function BigTechBar() {
    return (
        <div>
            <BigTechButton browser="Safari">
                Apple
            </BigTechButton>
            <BigTechButton browser="Chrome">
                Google
            </BigTechButton>
            <BigTechButton browser="Edge">
                Microsoft
            </BigTechButton>
        </div>
    )
}