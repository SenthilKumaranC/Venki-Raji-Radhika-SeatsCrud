import React, { useCallback, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Seat from "./components/Seat/Seat";

export enum SeatStatus{
  OCCUPIED="occupied",
  SELECTED="selected",
  VACANT="vacant"
}
export interface IPosition{
  x:number;
  y:number;
}
export interface ISeat{
  id:string;
  name:string;
  position:IPosition;
  rate:number;
  status:SeatStatus
}

function App() {
  const [seats, setSeats] = useState<ISeat[]>([ 
    {
      id: "#123",
      name: "A1",
      position: { x: 0, y: 0 },
      rate: 100,
      status: SeatStatus.VACANT,
    },
    {
      id: "#124",
      name: "A2",
      position: { x: 0, y: 0 },
      rate: 100,
      status: SeatStatus.OCCUPIED,
    },
    {
      id: "#125",
      name: "A3",
      position: { x: 0, y: 0 },
      rate: 100,
      status: SeatStatus.VACANT,
    },
  ]);

  const updateSeatStatus = useCallback((id:string,changes:Partial<ISeat>)=>{
    const index = seats.findIndex((seat)=>seat.id===id);
    const selectedSeat = {...seats[index],...changes};
    const clonedSeats = [...seats];
    clonedSeats[index] = selectedSeat;

    setSeats(clonedSeats);

  },[seats])

  const seatsUI = useMemo(() => {
    return seats.map((seat) => {
      return <Seat key={seat.id} {...seat} updateOne={updateSeatStatus}></Seat>;
    });
  }, [seats,updateSeatStatus]);

  return (
    <div className="App">
      <div className="seats">{seatsUI}</div>
    </div>
  );
}

export default App;

//list - nonlist
//list - item -
//id(str) , name(str) , position(obj) , rate(number) , status(enum) : occupied/selected/vacant , addtionalInfo(any):
