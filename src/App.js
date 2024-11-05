
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", isDarkMode);
  };

  return (
    < div className="md:w-fit w-screen lg:w-full  min-h-screen ">

     <Navbar toggleDarkMode={toggleDarkMode}  />
    <div className="flex flex-col md:flex-row  dark:bg-black bg-white text-black  dark:text-white ">



    <Sidebar toggleDarkMode={toggleDarkMode}/>

    <div className="flex-1 p-4 md:p-6">

      <Dashboard />

    </div>
    </div>
    </div>
  );
};

export default App;
