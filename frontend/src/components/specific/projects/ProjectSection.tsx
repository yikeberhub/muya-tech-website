import React from "react";
import ProjectIntro from "./ProjectIntro";
import ProjectOverview from "./FeaturedProjects";
import FeaturedProjects from "./FeaturedProjects";
import AllProjects from "./AllProjects";
import Testimonials from "@/components/layout/Testimonials";

const ProjectSection: React.FC = () => {
  return (
    <>
      <ProjectIntro />
      <ProjectOverview />
      <FeaturedProjects />
      <AllProjects />
      <Testimonials/>
    </>
  );
};

export default ProjectSection;
