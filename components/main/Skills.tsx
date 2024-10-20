import { backendSkill, frontEndSkills, otherSkills, skillsData } from "@/constant";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-0 h-full relative overflow-hidden pt-16 pb-2"
      style={{ transform: "scale(0.97)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {skillsData.map((s, index) => (
          <SkillDataProvider
            src={s.image}
            width={s.width}
            height={s.height}
            index={index}
            key={index}
            competency={s.competency}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {frontEndSkills.map((s, index) => (
          <SkillDataProvider
            src={s.image}
            width={s.width}
            height={s.height}
            index={index}
            key={index}
            competency={s.competency}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {backendSkill.map((s, index) => (
          <SkillDataProvider
            src={s.image}
            width={s.width}
            height={s.height}
            index={index}
            key={index}
            competency={s.competency}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap  mt-4 gap-5 items-center">
        {otherSkills.map((s, index) => (
          <SkillDataProvider
            src={s.image}
            width={s.width}
            height={s.height}
            index={index}
            key={index} 
            competency={s.competency}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video 
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
            />

        </div>

      </div>
    </section>
  );
};

export default Skills;
