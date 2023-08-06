import React from "react";
import Header from "./components/Header.js";
import TweetForm from "./components/TweetForm.js";
import TweetList from "./components/TweetList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <TweetForm />
      <TweetList />
    </div>
  );
}

export default App;
