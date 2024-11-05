import {
  CircleDollarSign,
  EarthLock,
  LayoutDashboard,
  MessageCircle,
  Settings,
  ShieldAlert,
  Wallet,
  WalletMinimal,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";

const Sidebar = () => {
 


  return (
    <div className={`w-full  md:w-56 md:h-screen h-screen   flex flex-col justify-between p-4 md:p-6 `}>
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl md:text-2xl flex font-bold mb-6">
            cupi<span className="text-green-500">vupi.</span>
          </h1>
          
        </div>
        <ul className="cursor-pointer">
          <li className="mb-4 p-2">Menu</li>
          <li className= {`mb-4 flex gap-2 bg-black dark:bg-white text-white dark:text-black   w-full md:w-48 p-2 rounded-full`}>
            <LayoutDashboard className="size-6" />
            Dashboard
          </li>
          <li className={`mb-4 flex gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black   w-full md:w-48 rounded-full p-2`}>
            <Wallet className="size-6" />
            My Wallet
          </li>
          <li className={`mb-4 flex gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black    w-full md:w-48 rounded-full p-2`}>
            <WalletMinimal className="size-6" />
            Transactions
          </li>
          <li className={`mb-4 flex gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black   w-full md:w-48 rounded-full p-2`}>
            <EarthLock className="size-6" />
            Crypto
          </li>
          <li className={`mb-4 flex gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black   w-full md:w-48 rounded-full p-2`}>
            <MessageCircle />
            Messages
          </li>
          <li className={`mb-4 flex gap-2  hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black   w-full md:w-48 rounded-full p-2`}>
            <CircleDollarSign />
            Exchange
          </li>
        </ul>
      </div>
      <div >
        <h4 className="mb-4 p-2 rounded">General</h4>
        <ul className="cursor-pointer">
          <li className={`mb-4 flex gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black    w-full md:w-48 rounded-full p-2`}>
            <Settings />
            Settings
          </li>
          <li className={`mb-4 flex gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black    w-full md:w-48 rounded-full p-2`}>
            <ShieldAlert />
            Security
          </li>
        </ul>
        <hr className="dark:text-white text-black w-full md:w-48 my-6" />
        <div className="text-black dark:text-white" />
        <div className="flex items-center mt-6">
          <FaUser className="text-xl md:text-2xl mr-2" />
          <div className="flex flex-col">
            <span>Erick Tohir</span>
            <span>ericka@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
