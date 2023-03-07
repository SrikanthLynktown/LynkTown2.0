import { accordionList } from "@/datas/accordionData";
import React, { useState } from "react";
import SingleAccordion from "./SingleAccordion";

const Accordions = () => {
  const [expandedId, setExpandedId] = useState("");

  return (
    <div className="py-16 md:py-20 lg:py-24 px-4 bg-primaryBackground">
      <h1 className="text-[40px] text-primary text-center !mb-10">
        Have any questions?
      </h1>
      <section className="max-w-6xl mx-auto text-center">
        {accordionList.map((accord) => (
          <SingleAccordion
            key={accord.id}
            id={accord.id}
            title={accord.title}
            content={accord.content}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
          />
        ))}
      </section>
    </div>
  );
};

export default Accordions;
