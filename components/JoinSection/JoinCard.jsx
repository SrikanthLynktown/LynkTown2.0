import clsx from "clsx";
import React from "react";

const JoinCard = ({}) => {
  return (
    <div
      className={clsx(
        "max-w-[1207px] h-[482px] bg-primaryBackground rounded-[29px] p-16 px-5 sm:px-10 md:px-20 flex flex-col justify-center"
      )}
    >
      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        Join our email list, unlock the Secrets of Business growth!
      </h1>
      <div className="mt-10 flex flex-col items-center gap-10 md:flex-row md:gap-0">
        <input
          placeholder="Enter email id"
          className="!py-[20px] px-10 max-w-[944.41px] w-full"
        />
        <button className="!py-[20px] max-w-[287.49px] w-full bg-primary text-white text-xl font-semibold">
          Join now
        </button>
      </div>
    </div>
  );
};

export default JoinCard;
