import React, { useState, useEffect } from "react";
import PortfolioSummary from "./PortfolioSummary";
import TransactionList from "./TransactionList";
import Chart from "./Chart";
import Graph from "../Assests/graph.png";
import InvestmentChart from "./InvestmentChart";
import { Coins, Plus, Search, Wallet } from "lucide-react";

const Dashboard = () => {
  return (
    <div className={`w-full text-black dark:text-white p-4 `}>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-4 items-center mt-10 lg:mt-2  mb-6">
          <h1 className="text-xl md:text-2xl  font-bold">Dashboard</h1>
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search anything in cupwup..."
                className="p-2 border-gray-400  w-full md:w-64 border rounded-full text-black pl-10"
              />
            </div>
          </div>
        </div>
        <div className="flex text-black dark:text-white items-center gap-2 mb-6">
          <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-600">
            <Coins />
            <span className="absolute w-2.5 h-2.5 bg-green-500 rounded-full top-1 right-1"></span>
          </div>
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-600">
            <Wallet />
          </div>
          <button className="flex items-center  text-black dark:text-white space-x-2 px-2 py-1 md:px-4 md:py-2 rounded-full border border-gray-600 ">
            <span className="text-sm md:text-base ">Add new coin</span>
            <Plus  />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 card border h-fit border-gray-700 p-4 rounded">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-bold">Total Balance</h2>
              <p className="text-xl md:text-2xl font-bold">
                1.82937456 <span className="text-green-500">BTC</span>
              </p>
              <p className="text-gray-500">$20,974.23</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="btn btn-green text-sm md:text-base">Portfolio</button>
              <button className="btn btn-gray text-sm md:text-base">Funding</button>
              <button className="btn btn-gray text-sm md:text-base">Assets</button>
              <button className="btn btn-gray text-sm md:text-base">P2P</button>
            </div>
          </div>
          <div className="p-4 rounded">
            <Chart />
          </div>
        </div>
        <div className="flex flex-col text-black dark:text-white items-center lg:items-start justify-center">
          <div className="border border-gray-500 md:w-fit  rounded-lg p-4 mb-4 w-full ">
            <div className="flex text-black items-center mb-4">
              <div className="bg-white rounded-full p-2">
                <i className="fab fa-bitcoin text-black text-xl md:text-2xl"></i>
              </div>
              <div className="ml-4 dark:text-white">
                <div className="text-base md:text-lg font-bold">Bitcoin</div>
                <div className="text-gray-400">BTC</div>
              </div>
              <div className="ml-auto text-green-500">
                <i className="fas fa-caret-up "></i>
              </div>
            </div>
            <div className="flex text-black dark:text-white">
              <div className="flex flex-col">
                <div className="text-lg md:text-xl font-bold mb-2">$52,291</div>
                <div className="text-green-500">+0.25%</div>
              </div>
              <div>
                <img src={Graph} alt="Graph" className="w-16 md:w-20 h-auto" />
              </div>
            </div>
          </div>
          <InvestmentChart />
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <TransactionList className="flex-1" />
          <PortfolioSummary className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
