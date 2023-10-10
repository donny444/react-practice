export default function ListGroup() {
    return (
        <>
            <ListStyle backgroundStyle="background-color: red" />
            <ListStyle backgroundStyle="color: blue" />
            <ListStyle backgroundStyle="background-color: green" />
        </>
    )
}

function ListStyle({backgroundStyle}) {
    return (
        <div Style={backgroundStyle}>
            <List>AAA</List>
            <List>BBB</List>
            <List>CCC</List>
        </div>
    )
}

function List({children}) {
    return (
        <ul>
            <li>{children}</li>
            <li>{children}</li>
            <li>{children}</li>
        </ul>
    )
}