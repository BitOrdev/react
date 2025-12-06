import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("#ffffff");

  const changeColor = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
  };

  return (
    <>
      <div className="colorsContainer">
        <h1>State in React </h1>
        <div className="colors" style={{ backgroundColor: color }}></div>
      </div>

      <div className="colorChangeTagDiv">
        <label htmlFor="colorInput">Click to change color</label>
        <input id="colorInput" type="color" value={color} onChange={changeColor} />
      </div>
    </>
  );
}

export default App;
