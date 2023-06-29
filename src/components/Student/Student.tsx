import { useCallback, useId } from "react";
import classes from "./Student.module.css";

const Student = (props: any) => {

  const { id, deleteOne, name, marks } = props;

  const deleteStudent = useCallback(() => {
    deleteOne(id);
  }, [deleteOne, id]);

  const editStudent = useCallback(() => {
   
  }, []);

  return (
    <>
      <div className={classes.Student}>
        <span className={classes.Cell}>{id}</span>
        <span className={classes.Cell}>{name}</span>
        <span className={[classes.Cell,classes.MarksCell].join(" ")}>{marks}</span>
        <span className={classes.Cell}>{props.class}</span>
        <button onClick={deleteStudent}>Delete</button>
        <button onClick={editStudent}>Edit</button>
      </div>
    </>
  );
};

export default Student;
