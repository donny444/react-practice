import { useState } from "react";
import { primeMinisters } from "../data/prime_ministers.js";
import { getImagePath } from "./utils.js";

export default function PrimeMinistersList() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < primeMinisters.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let primeMinister = primeMinisters[index];
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
      <h2>
        <i>{primeMinister.name} </i> 
        from {primeMinister.party}
      </h2>
      <h3>  
        ({index + 1} of {primeMinisters.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{primeMinister.detail}</p>}
      <img 
        src={getImagePath(primeMinister)}
        alt={primeMinister.fileName}
      />
    </>
  );
}