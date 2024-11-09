import "./App.css";
import lightOn from "./assets/light-on.png";
import lightOff from "./assets/light-off.png";
import { useState } from "react";

function App() {
  const [lightState, setLightState] = useState(false);

  const lightStateChange = () => {
    console.log("Light State Changed");
    setLightState(!lightState); // Toggle the light state
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-4">
        <h1 className="text-white mb-10 font-mono text-xl sm:text-2xl text-center">
          Change Light On/Off using useState Hook
        </h1>
        <div className="mb-10">
          <img src={lightState ? lightOn : lightOff} alt="Light" className="w-32 sm:w-48 md:w-64" />
        </div>
        <button
          onClick={lightStateChange}
          className="text-white border rounded p-2 m-4 sm:m-8"
        >
          Change Light
        </button>
      </div>
    </>
  );
}

export default App;
