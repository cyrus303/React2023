import './Timer.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Countdown from './Countdown';

function Timer() {
  const [active, setActive] = useState('Pomodoro');
  const [start, setStart] = useState(false);

  const handleStart = () => {
    if (start) {
      setStart(false);
    } else {
      setStart(true);
    }
  };

  const timerType = (event) => {
    setActive(event.target.textContent);
    setStart(false);
  };

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
          className={active === 'Short Break' ? 'selected break' : ''}
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
          <Countdown timerinfo={active} startTimer={start} />
        </p>
      </div>
      <button onClick={handleStart}>{start ? 'Pause' : 'Start'}</button>
    </div>
  );
}

export default Timer;
