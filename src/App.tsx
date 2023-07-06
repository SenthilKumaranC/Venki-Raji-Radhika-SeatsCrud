import { useCallback, useReducer, useRef } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";

export enum SeatStatus {
  OCCUPIED = "occupied",
  SELECTED = "selected",
  VACANT = "vacant",
}

export interface ICounter {
  value: number;
  clicks: number;
}

const initialState: ICounter = {
  value: 0,
  clicks: 0,
};

const reducer = (state: ICounter, action: any) => {
  switch (action.type) {
    case "incrementBy":
      return { ...state, value: state.value + action.payload };
    case "increment":
      return { ...state, value: state.value + 1 };
    case "decrement":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const incrementBy = useCallback(() => {
    console.log(inputRef.current.value)
    dispatch({ type: "incrementBy" , payload: Number(inputRef.current.value)});
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const inputRef = useRef<any>();

  return (
    <div style={{padding:"30px"}}>
      {state.value}
      <input ref={inputRef}></input>
      <button onClick={incrementBy}>Increment By</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Timer></Timer>
    </div>
  );
}

export default App;

//list - nonlist
//list - item -
//id(str) , name(str) , position(obj) , rate(number) , status(enum) : occupied/selected/vacant , addtionalInfo(any):
