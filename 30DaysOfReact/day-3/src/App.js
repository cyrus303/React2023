import InputFields from './components/InputFields';
import Title from './components/Title';
// import logo from './logo.svg';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const cardStyles = {
  backgroundColor: '#c3e6f3',
  padding: 25,
  lineHeight: 1.5,
  minWidth: '600px',
  width: '80%',
  textAlign: 'center',
  borderRadius: '20px',
  color: '#252a37',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

function App() {
  return (
    <div className="container" style={containerStyles}>
      <div className="App" style={cardStyles}>
        <Title />
        <InputFields />
      </div>
    </div>
  );
}

export default App;
