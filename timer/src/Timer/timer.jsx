
import React, {useState,useEffect} from "react";
import { CountDownTimer } from "./countDownTimer";
export default function Timer() {
    const [time, setTime] = React.useState(60);
    const [startTimer, setStartTimer] = React.useState(false);
    const [timerId, setTimerId] = React.useState(0);
  
    useEffect(() => {
     countDown();
  
      return () => {
        if (time !== 0) {
          clearInterval();
        }
      };
    }, [startTimer])

    const countDown=()=>{
        let intervalId = null;
        if (startTimer) {
          intervalId = setInterval(() => {
            if (time < 1) {
              clearInterval(intervalId);
            }
            setTime((prev) => prev - 1);
          }, 1000);
          setTimerId(intervalId);
        } else {
          clearInterval(timerId);
        }
    }
  return (
    <>
    
     <CountDownTimer timeLimit={time} />
     {/* {time} */}

      {!startTimer ? (
        <button className="btn play"
          onClick={() => {
            setStartTimer(true);
          }}
        >
          Play
        </button>
      ) : (
        <button  className="btn pause" onClick={() => setStartTimer(false)}>Pause</button>
      )}
      <button  className="btn reset" onClick={() => {setTime(60);setStartTimer(false)}}>Reset</button>
    </>
  );
}
