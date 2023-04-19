import Dropdown from './components/Dropdown';
import { useState } from 'react';

function App() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelected = (option) => {
    setSelected(option);
  };

  return (
    <Dropdown options={options} value={selected} onChange={handleSelected} />
  );
}

export default App;
