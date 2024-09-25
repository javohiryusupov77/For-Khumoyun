import React from "react";

const Main = () => {
  return (
    <div className="relative text-center overflow-hidden">
      <img
        src="https://previews.123rf.com/images/rido/rido2010/rido201000043/156811244-professor-assisting-college-student-with-laptop-in-classroom-during-computer-lesson-teacher-talking.jpg"
        alt="image of team"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          2024-2025 O'QUV YILI <br /> UCHUN QABUL BOSHLANDI
        </h1>
        <a href="#about">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors">
            TALABA BO'LISH
          </button>
        </a>
      </div>
    </div>
  );
};

export default Main;
