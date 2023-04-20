import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const rendredOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.value}
      </div>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.value || 'Select...'}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{rendredOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
