"use client";

import ServicesIntro from "./ServicesIntro";
import CoreServices from "./CoreServices";
import SpecializedServices from "./SpecializedServices";
import Technologies from "./Technologies";
import IndustrySolutions from "./IndustrySolutions";
import DevelopmentProcess from "./DevelopmentProcess";

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-16">
      <ServicesIntro />
      <CoreServices />
      <SpecializedServices />
      <Technologies />
      <IndustrySolutions />
      <DevelopmentProcess />
    </section>
  );
}
