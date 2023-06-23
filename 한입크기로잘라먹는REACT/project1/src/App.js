import './App.css';
import Viewer from './compo/Viewer';
import Controller from './compo/Controller';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleCount={handleCount} />
      </section>
    </div>
  );
}

export default App;
