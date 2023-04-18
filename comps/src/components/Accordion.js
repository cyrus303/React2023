import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretLeft } from 'react-icons/ai';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const rendrendItems = items.map((item, index) => {
    const { lable, content, id } = item;
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <AiFillCaretDown /> : <AiFillCaretLeft />}
      </span>
    );

    return (
      <div key={id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {lable}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{rendrendItems}</div>;
}

export default Accordion;
