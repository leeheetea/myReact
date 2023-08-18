import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const onClick = () => dispatch({ type: "counterSlice/up", step: 2 });

  return (
    <div>
      <button onClick={onClick}>+</button> {count}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
