import { useState } from "react";

export default function DarkMode() {
    const [dark, setDark ] = useState(false);

    function handleClick() {
        setDark(!dark);
    }
    
    return (
        <div>
            <Block Style={dark ? 'background-color: black' : 'blackground-color: white'} onChange={handleClick}>Button1</Block>
            <Block Style={dark ? 'background-color: black' : 'blackground-color: white'} onChange={handleClick}>Button2</Block>
            <Block Style={dark ? 'background-color: black' : 'blackground-color: white'} onChange={handleClick}>Button3</Block>
        </div>
    )
}

function Block({onChange, children}) {
    return (
        <div>
            <button Style="color: blue"onClick={onChange}>{children}</button>
        </div>
    )
}