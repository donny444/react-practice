import { useState } from "react"
import { Logo } from "./logo.jsx"

export function Section() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Logo />
            <div className="mx-5">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint praesentium, fuga illum consectetur at, vero dolore, explicabo earum quaerat sit eos nesciunt officia nulla! Impedit dolore rerum exercitationem tempore ipsam odio, beatae aut consequatur eum!</p>
            </div>
            <div className="text-center">
                <button onClick={() => setCount((count) => count + 1)} className="btn-danger btn-lg text-dark">
                    Increment: {count}
                </button>
            </div>
        </div>
    )
}