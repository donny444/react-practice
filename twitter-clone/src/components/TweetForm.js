import React from 'react';

function TweetForm() {
  return (
    <form>
      <textarea placeholder="What's happening?"></textarea>
      <button type="submit">Tweet</button>
    </form>
  );
}

export default TweetForm;