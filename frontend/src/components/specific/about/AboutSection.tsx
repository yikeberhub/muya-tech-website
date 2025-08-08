import React from "react";
import AboutIntro from "./AboutIntro"; 
import OurProcess from "./OurProcess"; 
import OurStory from "./OurStory";
import MissionAndVision from "./MissionAndVision";
import MeetOurTeam from "./MeetOurTeam";

const AboutSection = () => {
  return (
    <div>
      <AboutIntro />
      <OurStory/>
      <MissionAndVision/>
      <MeetOurTeam/>
      <OurProcess />
    </div>
  );
};

export default AboutSection;
