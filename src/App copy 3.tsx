import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Seat from "./components/Seat/Seat";
import useCrud from "./hooks/useCrud";
import Student from "./components/Student/Student";

export enum SeatStatus {
  OCCUPIED = "occupied",
  SELECTED = "selected",
  VACANT = "vacant",
}
export interface IPosition {
  x: number;
  y: number;
}
export interface ISeat {
  id: string;
  name: string;
  position: IPosition;
  rate: number;
  status: SeatStatus;
}

function App() {

  const [counter,setCounter] = useState<any>({value:0,clicks:0});

  const increment = useCallback(()=>{
     setCounter((prev:any)=> ({...prev,value:prev.value+1,clicks:prev.clicks+1}))
  },[])

  const decrement = useCallback(()=>{
    setCounter((prev:any)=> ({...prev,value:prev.value-1,clicks:prev.clicks+1}))
 },[])

  return <div>
      {counter.value}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
  </div>
  


}

export default App;

//list - nonlist
//list - item -
//id(str) , name(str) , position(obj) , rate(number) , status(enum) : occupied/selected/vacant , addtionalInfo(any):
