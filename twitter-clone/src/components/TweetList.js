import React from "react";
import Tweet from "./Tweet";

function TweetList() {
    return (
        <div>
            <Tweet author="Alice" content="Hello, Twitter!" />
            <Tweet author="Bob" content="Hello, Alice!" />
        </div>
    );
}

export default TweetList;