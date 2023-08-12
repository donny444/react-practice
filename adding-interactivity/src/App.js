import './App.css';
import Button from "./components/button.js"
import Toolbar from "./components/toolbar.js"
import Signup from './components/signup.js';
import Gallery from './components/gallery.js';
import Page from './components/page.js';

function App() {
  return (
    <>
      <Button />
      <Toolbar />
      <Signup />
      <Page />
    </>
  );
}

export default App;
