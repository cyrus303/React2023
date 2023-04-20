import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function DropdownPage() {
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
    <div className="flex">
      <Dropdown options={options} value={selected} onChange={handleSelected} />
    </div>
  );
}

export default DropdownPage;
