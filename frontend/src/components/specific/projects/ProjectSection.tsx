import React from "react";
import ProjectIntro from "./ProjectIntro";
import ProjectOverview from "./FeaturedProjects";
import FeaturedProjects from "./FeaturedProjects";
import AllProjects from "./AllProjects";
import Testimonials from "@/components/layout/Testimonials";
import CallToAction from "@/components/shared/CallToAction";

const ProjectSection: React.FC = () => {
  return (
    <>
      <ProjectIntro />
      <ProjectOverview />
      <FeaturedProjects />
      <AllProjects />
      <Testimonials/>
      <CallToAction/>

    </>
  );
};

export default ProjectSection;
