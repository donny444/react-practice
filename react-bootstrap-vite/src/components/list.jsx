import { primeMinisters } from "../data/primeministers.js";
import { getImagePath } from "./utils.jsx";

export function List() {
    const listItems = primeMinisters.map(person =>
        <li className="list-group-item list-group-item-warning">
            <img
                src={getImagePath(person)}
                alt={person.name}
                width="200"
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.party + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul className="list-group list-group-flush">{listItems}</ul>;
}