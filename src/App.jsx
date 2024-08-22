import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = (value) => {
    dispatch({ type: "INCREMENT", payload: value });
  };
  const decrease = (value) => {
    dispatch({ type: "DECREMENT", payload: value });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increase(1)}>증가</button>
      <button onClick={() => increase(5)}>5증가</button>
      <button onClick={() => increase(10)}>10증가</button>
      <button onClick={() => decrease(1)}>1감소</button>
      <button onClick={() => decrease(5)}>5감소</button>
      <button onClick={() => decrease(10)}>10감소</button>
    </div>
  );
}

export default App;
