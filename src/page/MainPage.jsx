import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Main from "../components/Main";
import Achievements from "../components/Achivements";

const MainPage = () => {
  return (
    <div>
      <Main />
      <Achievements />
      <RegisterForm />
    </div>
  );
};

export default MainPage;
