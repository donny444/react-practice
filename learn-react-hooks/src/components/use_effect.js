import { useState, useEffect } from "react";

/*export default function Page() {
   const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);
    useEffect(() => {
      let ignore = false;
      setBio(null);
      fetchBio(person).then(result => {
        if (!ignore) {
          setBio(result);
        }
      });
      return () => {
        ignore = true;
      }
    }, [person]);
  
    return (
      <>
        <select value={person} onChange={e => {
          setPerson(e.target.value);
        }}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Taylor">Taylor</option>
        </select>
        <hr />
        <p><i>{bio ?? 'Loading...'}</i></p>
      </>
    );
  }*/

export default function Btn() {
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        alert("Hello side effect!");

        return () => alert("goodbye component!");
    })

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    )
}