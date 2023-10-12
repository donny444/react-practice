import { useState } from "react";
import { getImagePath } from "./utils.js";
import { iPhones } from "../data/iphone.js";

export default function IphoneList() {
    const [index, setIndex] = useState(0);

    let hasPrev = index > 0;
    let hasNext = index < iPhones.length - 1;

    function handlePrevClick() {
        if(hasPrev) {
            setIndex(index - 1);
        }
    }
    
    function handleNextClick() {
        if(hasNext) {
            setIndex(index + 1);
        }
    }

    let iPhone = iPhones[index];
    return (
        <>
            <button
                onClick={handlePrevClick}
                disabled={!hasPrev}
            >
                Previous
            </button>
            <button
                onClick={handleNextClick}
                disabled={!hasNext}
            >
                Next
            </button>
            <h2>iPhone {iPhone.series}</h2>
            <img
                src={getImagePath(iPhone)}
                alt={"iphone" + iPhone.series}
                width={250}
            />
        </>
    )
}