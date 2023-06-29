import { useMemo } from "react";
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
  const {
    updateItem: updateSeat,
    deleteItem: deleteSeat,
    items: seats,
  } = useCrud([
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

  const {
    updateItem: updateStudent,
    deleteItem: deleteStudent,
    items: students,
  } = useCrud([
    {
      id: "1",
      name: "Raji",
      marks: 100,
      class: "XI",
    },
    {
      id: "2",
      name: "Venki",
      marks: -100,
      class: "XI",
    },
    {
      id: "3",
      name: "Sentil",
      marks: -100,
      class: "XI",
    },
  ]);

  const studentsUI = useMemo(() => {
    return students.map((student) => {
      return (
        <Student
          key={student.id}
          {...student}
          updateOne={updateStudent}
          deleteOne={deleteStudent}
        ></Student>
      );
    });
  }, [students, updateStudent, deleteStudent]);

  const seatsUI = useMemo(() => {
    return seats.map((seat) => {
      return (
        <Seat
          key={seat.id}
          {...seat}
          updateOne={updateSeat}
          deleteOne={deleteSeat}
        ></Seat>
      );
    });
  }, [seats, updateSeat, deleteSeat]);

  return (
    <div className="App">
      {/* <div className="seats">{seatsUI}</div> */}
      <div className="Students">{studentsUI}</div>
    </div>
  );
}

export default App;

//list - nonlist
//list - item -
//id(str) , name(str) , position(obj) , rate(number) , status(enum) : occupied/selected/vacant , addtionalInfo(any):
