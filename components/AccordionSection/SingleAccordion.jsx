import { useState } from "react";

const minusIcon = "-";
const plusIcon = "+";

function SingleAccordion({ title, content, expandedId, setExpandedId, id }) {
  const handleClick = () => {
    if (expandedId === id) {
      setExpandedId("");
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="my-4 shadow-sm cursor-pointer" onClick={handleClick}>
      <div className="px-6 text-left items-center h-14 select-none flex justify-between flex-row">
        <h5 className="flex-1 text-[#2A2A2ACC] text-[16px]">{title}</h5>
        <div className="flex-none pl-2 text-[24px] font-semibold">
          {expandedId === id ? minusIcon : plusIcon}
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-100 ease-linear ${
          expandedId === id ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left text-[#3B3B3B] text-[14px]">{content}</p>
      </div>
    </div>
  );
}

export default SingleAccordion;
