import React from "react";

const Main = () => {
  return (
    <div className="relative text-center overflow-hidden ">
      <img
        src="https://previews.123rf.com/images/rido/rido2010/rido201000043/156811244-professor-assisting-college-student-with-laptop-in-classroom-during-computer-lesson-teacher-talking.jpg"
        alt="image of team"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">
          2024-2025 O'QUV YILI <br /> UCHUN QABUL BOSHLANDI
        </h1>
        <button className="my-6 px-8 py-6 bg-blue-600 rounded hover:bg-blue-700">
          TALABA BO'LISH
        </button>
        <br />
      </div>
    </div>
  );
};

export default Main;
