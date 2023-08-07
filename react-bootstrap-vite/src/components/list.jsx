import { people } from "../data/people.js";
import { getImageUrl } from "./utils.jsx";

export function List() {
    const listItems = people.map(person =>
        <li className="list-group-item list-group-item-warning">
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul className="list-group list-group-flush">{listItems}</ul>;
}