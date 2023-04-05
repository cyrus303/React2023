import React, { useState, useEffect } from 'react';

function Countdown({ timerinfo, startTimer }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // let start = false;
  // console.log(startTimer);
  useEffect(() => {
    if (timerinfo === 'Pomodoro') {
      setMinutes(25);
      setSeconds(0);
    } else if (timerinfo === 'Short Break') {
      setMinutes(5);
      setSeconds(0);
    } else if (timerinfo === 'Long Break') {
      setMinutes(30);
      setSeconds(0);
    }
  }, [timerinfo]);

  //todo: ui update stops but timer keeps runing: need to fix clear interval
  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        console.log('seconds:' + seconds);
        setSeconds(seconds - 1);

        if (seconds <= 1) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
      if (minutes < 0) {
        setMinutes(0);
        setSeconds(0);
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }
  });

  return (
    <div>
      {minutes < 10 ? '0' + minutes : minutes}:
      {seconds < 10 ? '0' + seconds : seconds}
    </div>
  );
}

export default Countdown;
