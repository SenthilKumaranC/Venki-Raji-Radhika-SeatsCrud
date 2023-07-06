import { useState } from "react";
import ChildA from "../ChildA/ChildA";


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

return(<ChildA></ChildA>)

};

export default Root;
