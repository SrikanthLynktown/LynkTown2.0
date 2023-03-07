import clsx from "clsx";
import React from "react";

const GuideCard = ({ selected, date, subject, details }) => {
  return (
    <div
      className={clsx(
        "w-[284px] h-[286px] text-left px-3 py-8",
        selected
          ? "bg-primaryBackground rounded-[15px] border border-primary"
          : "border-b-2"
      )}
    >
      <p className="text-[14px] text-[#757575] mb-5">{date}</p>
      <h5 className="text-[18px] text-[#3B3B3B] font-semibold mb-3">
        {subject}
      </h5>
      <p className="text-[16px] text-[#757575]">{details}</p>
    </div>
  );
};

export default GuideCard;
