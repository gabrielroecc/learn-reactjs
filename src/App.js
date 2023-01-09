import "./App.css";

function App() {
  const name = "Gab";

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/200";

  return (
    <div className="App">
      <h1>Understanding JSX</h1>
      <p>Hello, {name}</p>
      <p>Sum: {sum(10, 10)}</p>
      <img src={url} />
    </div>
  );
}

export default App;
