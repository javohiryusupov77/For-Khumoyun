import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Ta'lim yo'nalishlari",
    value: "12",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Talabalar",
    value: "500",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
];

const Achievements = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16 px-4">
      <h1 className="text-3xl font-extrabold text-center mb-8">
        Our Achievements
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg py-8 px-6 shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-20"
            >
              <h2 className="text-5xl font-bold flex items-center justify-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-gray-300 text-lg text-center mt-2">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
