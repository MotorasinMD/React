import './App.css';
import {useEffect, useRef, useState} from 'react'

function App() {

  const [name,setName] = useState('');
  // const [renderCount,setRenderCount]= useState(0);
  const renderCount = useRef(0);

  const inputref = useRef();

  // useEffect(()=>   sonsuz dönüyor.
  //   {
  //     setRenderCount((prev)=>prev+1);
  //   },[renderCount]);

  useEffect(()=>
    {
      renderCount.current = renderCount.current +1; 
    });

  const focusInput = () =>
    {
      console.log(inputref.current);
      inputref.current.focus();
      inputref.current.value ="Mehmet";
    }

  return (
    <div className="App">
      <input ref={inputref} type ="text" value = {name} onChange={(e)=>setName(e.target.value)} />
      <div>Benim adım {name}</div>
      <div>{renderCount.current} defa render oldu.</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
