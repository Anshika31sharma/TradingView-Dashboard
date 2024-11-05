import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label
} from 'recharts';

const data = [
  { month: 'Jan', value: 8 },
  { month: 'Feb', value: 4 },
  { month: 'Mar', value: 12 },
  { month: 'Apr', value: 6 },
  { month: 'May', value: 4 },
  { month: 'Jun', value: 8 },
];

const InvestmentChart = () => {
  return (
    <div className="border border-gray-700 w-full text-black p-4 rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="text-xl font-bold mb-2 md:mb-0">$1029.37</div>
        <div className="text-gray-400 mb-4 md:mb-0">Return On Investment</div>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" tick={{ fill: '#888' }} />
          <YAxis hide />
          <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
          <ReferenceLine y={8.43} stroke="white" strokeDasharray="3 3">
            <Label value="Avg = 8.43%" position="right" fill="white" />
          </ReferenceLine>
          <Bar dataKey="value" fill="#22c55e" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentChart;
