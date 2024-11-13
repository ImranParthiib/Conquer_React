import "./App.css";
import lightOn from "./assets/light-on.png";
import lightOff from "./assets/light-off.png";
import { useState } from "react";

function App() {
  const [lightState, setLightState] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-4">
        <h1 className="text-white mb-10 font-mono text-xl sm:text-2xl text-center border p-1">
          Change Light On/Off using useState Hook
        </h1>
        <div className="mb-10">
          <img
            src={lightState ? lightOn : lightOff}
            alt="Light"
            className="w-32 sm:w-48 md:w-64"
            onMouseOver={() => setLightState(!lightState)}
            onMouseOut={() => setLightState(!lightState)}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setLightState(!lightState)}
        >
          {lightState ? "Turn Off" : "Turn On"}
        </button>
      </div>
    </>
  );
}

export default App;
