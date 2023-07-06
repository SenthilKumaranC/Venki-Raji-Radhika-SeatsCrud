
import { useCallback, useEffect, useRef, useState } from "react";

export enum TimerStatus {
    RUNNING,
    STOPPED,
}


const Timer = ()=> {

    const [count,setCount] = useState<number>(0);
    const [timerStatus,setTimerStatus] = useState(TimerStatus.STOPPED);
    const timerID = useRef<any>();

    const incrementTask = useCallback(()=>{
        setCount((prevCount)=> prevCount  + 1);
   },[]);

    useEffect(()=>{
        if(timerStatus === TimerStatus.RUNNING){
            timerID.current = setInterval(incrementTask,1000);
        }
        else{
            clearInterval(timerID.current);
        }
    },[timerStatus,incrementTask]);


    const startTimer = useCallback(()=> {
        setTimerStatus(TimerStatus.RUNNING);
       
    },[]);

   
    const stopTimer = useCallback(()=> {
        setTimerStatus(TimerStatus.STOPPED);
        
    },[]);
    
    return (
        <div>
            {count}
           <button disabled={timerStatus ===  TimerStatus.RUNNING} onClick={startTimer}>start timer</button> 
           <button disabled={timerStatus ===  TimerStatus.STOPPED} onClick={stopTimer}>stop timer</button>
        </div>
    );
}

export default Timer;
