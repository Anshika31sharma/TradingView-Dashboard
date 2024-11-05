import React from 'react';

const PortfolioSummary = () => {
  return (
    <div className=" p-4 w-full text-black dark:text-white  rounded">
       <h2 className="text-lg font-bold mb-4">Your Portfolio</h2>
                        <div className="  rounded">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <div className="bg-gray-900 p-2 rounded-full">
                                        <i className="fab fa-bitcoin text-2xl text-yellow-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-md font-bold">Bitcoin</h3>
                                        <p className="text-gray-500 text-sm">Buy</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-red-500 text-sm">-$5,642</p>
                                    <p className="text-gray-500 text-sm">Today, 15:20 PM</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <div className="bg-gray-900 p-2 rounded-full">
                                        <i className="fab fa-ethereum text-2xl text-gray-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-md font-bold">Ethereum</h3>
                                        <p className="text-gray-500 text-sm">Received</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-green-500 text-sm">+0.245 ETH</p>
                                    <p className="text-gray-500 text-sm">Today, 10:20 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <div className="bg-gray-900 p-2 rounded-full">
                                        <i className="fab fa-bitcoin text-2xl text-yellow-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-md font-bold">Polkadot</h3>
                                        <p className="text-gray-500 text-sm">Buy</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-green-500 text-sm">+3.12%</p>
                                    <p className="text-gray-500 text-sm">Today, 9:20 AM</p>
                                </div>
                            </div>
                           
                        </div>
                
    </div>
  );
};

export default PortfolioSummary;
