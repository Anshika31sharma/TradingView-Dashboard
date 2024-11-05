import React from 'react';

const TransactionList = () => {
  const transactions = [
    { id: 1, type: 'Buy', crypto: 'Bitcoin', amount: '0.5 BTC', date: 'Mar 10' },
    { id: 2, type: 'Sell', crypto: 'Ethereum', amount: '1.2 ETH', date: 'Mar 9' },
  ];

  return (
      <div className=" p-4 w-full text-black dark:text-white rounded mb-4">
        <h2 className="text-lg font-bold mb-4 w-fit">Recent Transactions</h2>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <div className="  rounded-full">
                                        <i className="fab fa-bitcoin text-2xl text-yellow-500"></i>
                                    </div>
                                    <div className="flex items-center">
                                    <div className="bg-gray-900 p-2 rounded-full">
                                        <i className="fab fa-bitcoin text-2xl text-yellow-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-md font-bold">Bitcoin</h3>
                                        <p className="text-gray-500 text-sm">BTC/AUD</p>
                                    </div>
                                </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-md font-bold">$20,356,211</p>
                                    <p className="text-green-500 text-sm">+3.23%</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="btn btn-red text-sm">Sell</button>
                                    <button className="btn btn-green text-sm">Buy</button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <div className=" rounded-full">
                                        <i className="fab fa-ethereum text-2xl text-gray-500"></i>
                                    </div>
                                    <div className="flex items-center">
                                    <div className="bg-gray-900 p-2 rounded-full">
                                        <i className="fab fa-bitcoin text-2xl text-yellow-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-md font-bold">ETHEREUM</h3>
                                        <p className="text-gray-500 text-sm">ETH/AUD</p>
                                    </div>
                                </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-md font-bold">$15,216,971</p>
                                    <p className="text-green-500 text-sm">+1.15%</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="btn btn-red text-sm">Sell</button>
                                    <button className="btn btn-green text-sm">Buy</button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <div className=" rounded-full">
                                        <i className="fab fa-bitcoin text-2xl text-yellow-500"></i>
                                    </div>
                                    <div className="flex items-center">
                                    <div className="bg-gray-900 p-2 rounded-full">
                                        <i className="fab fa-bitcoin text-2xl text-yellow-500"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-md font-bold">CARDANO</h3>
                                        <p className="text-gray-500 text-sm">ADA/AUD</p>
                                    </div>
                                </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-md font-bold">$15,216,971</p>
                                    <p className="text-red-500 text-sm">-0.88%</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="btn btn-red text-sm">Sell</button>
                                    <button className="btn btn-green text-sm">Buy</button>
                                </div>
                            </div>
                        </div>

  );
};

export default TransactionList;
