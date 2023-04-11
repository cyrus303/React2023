import { useState } from 'react';
const options = ['Italy', 'Spain', 'Greece'];
function DropdownForm() {
  const [selected, setSelected] = useState(options[0]);
  const submit = () => {
    console.log(selected);
  };
  return (
    <form>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <button type="button" onClick={submit}>
        Submit
      </button>
    </form>
  );
}
export default DropdownForm;
