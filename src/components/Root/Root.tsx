import { useState, createContext } from "react";
import ChildA from "../ChildA/ChildA";
import { IfStatement } from "typescript";

export interface IStudent {
    name : string;
    mark: number
}

// step 1 : planning the data.
 export const DataContext = createContext<IStudent[]>([]);


 const Root = () => {
    const [data, setData] = useState([
        {
            name: "rathika",
            mark: 100
        },
        {
            name: "ramani",
            mark: 20
        },
    ])

return(<DataContext.Provider value={data}><ChildA></ChildA></DataContext.Provider>)

};

export default Root;
