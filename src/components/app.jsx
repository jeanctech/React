import { useState } from "react";
import react from "../assets/react.svg";
import vite from "/vite.svg";
import '../styles/app.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div id="app"
        className="m-5 p-5 flex flex-col justify-center items-center" >
        <div id="app-container"
          className="m-5 p-5 flex flex-row justify-start items-center" >
          <h1 className="m-2.5 p-2.5 text-2.5xl font-semibold" >
            React.js
          </h1>
          <a href="https://vitejs.dev">
            <img src={vite} id='logo-vite' className="m-1 p-1" alt="Vite-Logo" width={50} />
          </a>
          <a href="https://reactjs.dev">
            <img src={react} id='logo-react' className="m-1 p-1" alt="React-Logo" width={50} />
          </a>
        </div>
        <div id="app-card"
          className="m-2.5 p-2.5 flex flex-row justify-center items-center" >
          <button className="m-2.5 p-2.5 bg-[#23383b]" onClick={() => setCount((count) => count + 1)} >
            Count Is - {count}
          </button>
          <p className="m-2.5 p-2.5 bg-[#2d3f42] text-slate-300 rounded-xl" >
            Edit <code className="m-1 p-1 font-bold text-[#00D8FF]">./src/components/app.jsx</code> and Save to Test Hmr
          </p>
        </div>
        <p id="read" className="m-2.5 p-2.5 bg-[#3c4446] rounded-lg"  >
          Click on The Vite and React Logos to Learn More
        </p>
      </div>
    </>
  );
}

export default App;
