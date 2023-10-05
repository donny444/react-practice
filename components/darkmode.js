import { useState } from "react";

export default function DarkMode() {
    const [dark, setDark ] = useState(false);

    function handleClick() {
        setDark(!dark);
    }
    
    return (
        <div>
            <button onClick={handleClick}>{dark ? "dark" : "light"}</button>
        </div>
    )
}