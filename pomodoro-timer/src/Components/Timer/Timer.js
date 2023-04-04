import './Timer.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Timer() {
  const [active, setActive] = useState('Pomodoro');
  const [seconds, setSeconds] = useState(5);
  const [minutes, setMinutes] = useState(0);

  const handleStart = (event) => {
    console.log(active);
  };

  const timerType = (event) => {
    setActive(event.target.textContent);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 1) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    if (minutes < 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  });

  return (
    <div className="timer-container">
      <div className="timer-type">
        <p
          className={active === 'Pomodoro' ? 'selected' : ''}
          onClick={timerType}
        >
          Pomodoro
        </p>
        <p
          className={active === 'Short Break' ? 'selected' : ''}
          onClick={timerType}
        >
          Short Break
        </p>
        <p
          className={active === 'Long Break' ? 'selected' : ''}
          onClick={timerType}
        >
          Long Break
        </p>
      </div>
      <div className="timer">
        <p className="time">
          {active === 'Pomodoro'
            ? '25:00'
            : active === 'Short Break'
            ? '05:00'
            : '30:00'}
        </p>
      </div>
      <button
        onClick={() => {
          handleStart();
        }}
      >
        Start
      </button>
    </div>
  );
}

export default Timer;
