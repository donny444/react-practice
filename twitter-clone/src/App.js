import React from 'react';
import Header from './components/Header';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

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