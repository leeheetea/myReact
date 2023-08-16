import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const Root = () => {
  return (
    <div className="container">
      <h1>Root</h1>
      <div className="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
};

const Left1 = () => {
  return (
    <div>
      <h1>Left</h1>
      <Left2 />
    </div>
  );
};

const Right1 = () => {
  return (
    <div>
      <h1>Right</h1>
      <Right2 />
    </div>
  );
};

const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
};

const Right2 = () => {
  return (
    <div>
      <h1>Right 2 </h1>
      <Right3 />
    </div>
  );
};

const Left3 = () => {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left 3 : {number}</h1>
    </div>
  );
};

const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right 3 </h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        {" "}
        increase{" "}
      </button>
    </div>
  );
};

const reducer = (currentState, action) => {
  if (!currentState) {
    return { number: 1 };
  }
  if (action.type === "INCREASE") {
    currentState.number++;
  }
  return { ...currentState };
};

const store = createStore(reducer);

function App() {
  return (
    <div>
      <Root />
    </div>
  );
}

export default App;
