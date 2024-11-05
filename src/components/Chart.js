import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: '3 Mar', value1: 200.73, value2: 375.08 },
  { date: '4 Mar', value1: 210.45, value2: 385.12 },
  { date: '5 Mar', value1: 220.87, value2: 400.89 },
  { date: '6 Mar', value1: 250.34, value2: 420.34 },
  { date: '7 Mar', value1: 230.56, value2: 405.23 },
  { date: '8 Mar', value1: 240.67, value2: 410.78 },
  { date: '9 Mar', value1: 230.45, value2: 390.67 },
  { date: '10 Mar', value1: 235.12, value2: 395.34 },
  { date: '11 Mar', value1: 200.73, value2: 375.08 },
];

const DashboardGraph = () => {
  return (
    <div className=" text-black dark:text-white p-5 rounded-lg ">
      <div className="w-full text-black h-[300px] md:h-[400px] lg:h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#333" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: '#ddd' }} />
            <YAxis tick={{ fill: '#ddd' }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e1e1e', borderColor: '#333' }}
              labelStyle={{ color: '#ddd' }}
            />
            <Legend />
            <Line type="monotone" dataKey="value1" stroke="#00d084" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="value2" stroke="#fcb045" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardGraph;
