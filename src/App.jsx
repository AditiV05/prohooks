import React, { useEffect, useState } from "react";
import "./App.css";

const LARGE_NUMBER = 1000000000;

function App() {
  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
  const [currentList, setList] = useState([]);
  const [delayResult, setDelayResult] = useState(null);

  const delayFunction = async () => {
    console.log("Delay Function Ran");
    await new Promise((resolve) => {
      setTimeout(() => {
        for (let index = 0; index < LARGE_NUMBER; index++) {}
        resolve();
      }, 0);
    });
    return value + 2;
  };

  const testFunction = () => {
    return [value * 3, value * 4];
  };

  useEffect(() => {
    console.log("Callback Function was called");
  }, [testFunction]);

  useEffect(() => {
    if (dark) {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }
  }, [dark]);

  const handleClick = () => {
    setTheme(!dark);
  };

  const handleChangeValue = () => {
    setValue(value + 1);
  };

  const handleList = async () => {
    const result = await delayFunction();
    setDelayResult(result);
    setList(testFunction(result));
  };

  const styleTheme = {
    backgroundColor: dark ? "black" : "#ccc7c7",
  };

  return (
    <div className="page" style={styleTheme}>
      <button onClick={handleClick}>{themeName}</button>
      <h1>{value}</h1>
      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleList}>Show List</button>
      <h2>{delayResult !== null ? delayResult : ""}</h2>
      <div>
        {currentList.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </div>
  );
}

export default App;
