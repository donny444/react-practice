export default function BoxGroup() {
    return (
        <div>
            <Box backgroundStyle="background-color: blue" textStyle="color: red">Box 1</Box>
            <Box backgroundStyle="background-color: red" textStyle="color: blue">Box 2</Box>
        </div>
    )
}

function Box({backgroundStyle, textStyle, children}) {
    return (
        <div Style={backgroundStyle}><h1 Style={textStyle}>{children}</h1></div>
    )
}