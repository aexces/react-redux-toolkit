import { decrement, increment, reset } from "../../state/counter/counterSlice";
import { AppDispatch, RootState } from "../../state/state";
import { useDispatch, useSelector } from "react-redux";
import "./counter.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const hint: string = useSelector((state: RootState) => state.counter.hint);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div>
        <div className="heading">
          <h1>Counter Application</h1>
        </div>
        <div className="heading">
          <h3>{hint === "" ? "Normal value" : hint}</h3>
        </div>
        <div className="heading">
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div className="buttons">
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </>
  );
};
export default Counter;
