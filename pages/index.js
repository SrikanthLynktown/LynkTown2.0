import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Accordions from "@/components/AccordionSection/Accordions";
import GuideSection from "@/components/GuideSection";
import JoinSection from "@/components/JoinSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [expanded, setExpanded] = useState({ expand: false, id: "" });

  return (
    <>
      <Accordions />
      <GuideSection />
      <JoinSection />
    </>
  );
}
