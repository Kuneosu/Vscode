import './App.css';
import Viewer from './compo/Viewer';
import Controller from './compo/Controller';
import Even from './compo/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const handleCount = (value) => {
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  // const didMountRef = useRef(false);

  // useEffect(() => {
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log("컴포넌트 업데이트");
  //   }
  // });

  // useEffect(() => {
  //   console.log("컴포넌트 마운트");
  // }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("Clean up");
  //     clearInterval(intervalID);
  //   };
  // });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleCount={handleCount} count={count} />
      </section>
    </div>
  );
}

export default App;
