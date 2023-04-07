import './App.css';
import Header from './Components/Header/Header';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import Task from './Components/Task/Task';
import Timer from './Components/Timer/Timer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar />
      <Timer />
      <Task />
    </div>
  );
}

export default App;
