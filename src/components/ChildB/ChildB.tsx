import { useContext } from "react";
import { DataContext } from "../Root/Root";

const ChildB = ()=>{
    const data = useContext(DataContext);
    console.log(data);
    return <h1>hello</h1>
};

export default ChildB;