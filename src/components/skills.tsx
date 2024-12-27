import { SkillCard } from "./SkillCard";
import { skillsData } from "../data/skillsData";

const skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container  mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default skills;
