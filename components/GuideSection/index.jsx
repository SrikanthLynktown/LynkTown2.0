import React from "react";
import GuideCard from "./GuideCard";

const GuideSection = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24 px-4 bg-white">
      <h1 className="text-[40px] text-primary text-center">LynkTown Guide</h1>
      <p className="text-[15px] text-center">
        Explore Our Latest Insights: Check out Our Blogs
      </p>
      <section className="max-w-6xl mx-auto text-center !mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center pt-3">
          <GuideCard
            date="28 MARCH 2022"
            subject="Designers are meant to be loved, not to be understood."
            details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor..."
          />
          <GuideCard
            selected={true}
            date="28 MARCH 2022"
            subject="Designers are meant to be loved, not to be understood."
            details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor..."
          />
          <GuideCard
            date="28 MARCH 2022"
            subject="Designers are meant to be loved, not to be understood."
            details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor..."
          />
          <GuideCard
            date="28 MARCH 2022"
            subject="Designers are meant to be loved, not to be understood."
            details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor..."
          />
        </div>
      </section>
    </div>
  );
};

export default GuideSection;
