import { useCallback } from "react";
import { SeatStatus } from "../../App";

const Seat = (props: any) => {
  const { status, updateOne, id, deleteOne } = props;

  const changeSeatStatus = useCallback(() => {
    if (status === SeatStatus.SELECTED) {
      updateOne(id, { status: SeatStatus.VACANT });
    }
    if (status === SeatStatus.VACANT) {
      updateOne(id, { status: SeatStatus.SELECTED });
    }
  }, [status, updateOne, id]);

  const deleteSeat = useCallback(() => {
    deleteOne(id);
  }, [deleteOne, id]);

  return (
    <>
      <input />
      <button className="" onClick={deleteSeat}>
        Delete Seat
      </button>
      <span onClick={changeSeatStatus}>{status}</span>
    </>
  );
};

export default Seat;
