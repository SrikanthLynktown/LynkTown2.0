import React from "react";
import GuideCard from "./GuideCard";
import JoinCard from "./JoinCard";
import LastSection from "./LastSection";

const JoinSection = () => {
  return (
    <>
      <div className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <section className="max-w-6xl mx-auto text-center !mt-10 z-20">
          <div className="relative">
            <div className=" ">
              <JoinCard />
            </div>
          </div>
        </section>
      </div>
      <div className="z-10 -mt-[200px]">
        <div className="">
          <LastSection />
        </div>
      </div>
    </>
  );
};

export default JoinSection;
