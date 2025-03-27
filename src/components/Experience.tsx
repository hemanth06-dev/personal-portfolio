import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Harman connected services",
      period: "Dec 2022 - Aug 2023",
      description: [
        "Led a team of 5 developers in building enterprise-level web applications",
        "Implemented microservices architecture using Spring Boot and React",
        "Improved application performance by 40% through optimization techniques",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Software Developer",
      company: "Harman connected services",
      period: "Dec 2021 - Dec 2022",
      description: [
        "Developed and maintained multiple client-facing applications using Angular and Java",
        "Implemented RESTful APIs and integrated third-party services",
        "Reduced database query time by 50% through optimization",
        "Collaborated with UX designers to implement responsive designs",
      ],
    },
    {
      title: "Engineer",
      company: "Virtusa Connected Services",
      period: "Aug 2019 - Dec 2021",
      description: [
        "Assisted in developing frontend components using React.js",
        "Worked on bug fixes and feature implementations",
        "Participated in daily stand-ups and sprint planning",
        "Learned and implemented best practices in web development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16
         bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative pl-8">
              {/* Timeline line - now extends to the bottom of the container */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-7 h-[calc(100%+3rem)] w-px bg-blue-200" />
              )}

              {/* Timeline dot */}
              <div
                className="absolute left-[-8px] top-7 w-4 h-4
              rounded-full bg-gradient-to-r from-blue-500 to-purple-500  z-10"
              />

              <div className=" p-6 rounded-xl hover:border-blue-500 transition-all hover:shadow-lg bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-xl border border-gray-100 dark:border-gray-700 ">
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase
                    size={20}
                    className="text-gray-600 dark:text-gray-300"
                  />
                  <h3 className="text-xl text-gray-600 dark:text-gray-300 font-semibold">
                    {exp.title}
                  </h3>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.period}
                  </p>
                </div>

                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
