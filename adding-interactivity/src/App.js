import './App.css';
import Counter from './components/counter';
import { DecrementBar, IncrementBar } from './components/counter';

function App() {
  return (
    <>
      <IncrementBar />
      <DecrementBar />
      <Counter />
    </>
  );
}

export default App;
