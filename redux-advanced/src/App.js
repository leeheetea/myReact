import "./App.css";
import CounterContainer from "./components/CounterContainer";
import TodosContainer from "./components/TodosContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
