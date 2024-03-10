import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import Team from "./Team";
function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 10);
  };

  return (
    <>
      <h2>React core concepts2</h2>

      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button
        onClick={() => {
          addToFive(10);
        }}
      >
        click me3
      </button>
    </>
  );
}

export default App;
