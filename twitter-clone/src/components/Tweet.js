import React from "react";

function Tweet({ author, content }) {
    return (
        <div>
            <h2>{author}</h2>
            <p>{content}</p>
        </div>
    );
}

export default Tweet;