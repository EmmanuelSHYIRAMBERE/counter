import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Steps />
    </div>
  );
}

function Counter({ steps }) {
  const [counter, setCounter] = useState(0);

  function IncrementCounter() {
    setCounter(() => counter + steps);
  }

  function decrementCounter() {
    setCounter(() => counter - steps);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "5px",
        }}
      >
        <button onClick={decrementCounter}>-</button>
        <p> Count: {counter} </p>
        <button onClick={IncrementCounter}>+</button>
      </div>
      <div>
        <Messages counts={counter} />
      </div>
    </>
  );
}

function Steps() {
  const [steps, setSteps] = useState(1);

  function IncrementSteps() {
    setSteps((step) => step + 1);
  }
  function decrementSteps() {
    setSteps((step) => step - 1);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "5px",
        }}
      >
        <button onClick={decrementSteps}>-</button>
        <div>{`Step: ${steps}`}</div>
        <button onClick={IncrementSteps}>+</button>
      </div>
      <div>
        <Counter steps={steps} />
      </div>
    </>
  );
}

function Messages({ counts }) {
  // const [date, setDate] = useState(0);
  let currentTime = new Date();
  currentTime.setDate(currentTime.getDate() + counts);

  // function changeDate() {
  //   currentTime.setDate(currentTime.getDate() + counts);
  //   setDate(currentTime);
  // }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "5px",
        }}
      >
        <p>
          {counts === -1 && `Yesterday was ${currentTime.toDateString()}`}
          {counts === 0 && `Today is ${currentTime.toDateString()}`}
          {counts === 1 && `Tommorrow is ${currentTime.toDateString()}`}
          {counts < -1 &&
            `${Math.abs(counts)} days ago was ${currentTime.toDateString()}`}
          {counts > 1 &&
            `${counts} days from Today is ${currentTime.toDateString()}`}
        </p>
      </div>
    </>
  );
}

export default App;
