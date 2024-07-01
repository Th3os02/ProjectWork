import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { hour: '08:00', Area1: 10, Area2: 15, Area3: 20 },
  { hour: '09:00', Area1: 12, Area2: 18, Area3: 25 },
  { hour: '10:00', Area1: 14, Area2: 20, Area3: 30 },
  { hour: '11:00', Area1: 16, Area2: 22, Area3: 35 },
  { hour: '12:00', Area1: 18, Area2: 24, Area3: 40 },
  { hour: '13:00', Area1: 15, Area2: 20, Area3: 30 },
  { hour: '14:00', Area1: 13, Area2: 18, Area3: 25 },
  { hour: '15:00', Area1: 12, Area2: 17, Area3: 22 },
  { hour: '16:00', Area1: 10, Area2: 15, Area3: 20 },
  { hour: '17:00', Area1: 9, Area2: 14, Area3: 18 },
  { hour: '18:00', Area1: 8, Area2: 13, Area3: 17 },
  { hour: '19:00', Area1: 7, Area2: 12, Area3: 15 },
  { hour: '20:00', Area1: 5, Area2: 10, Area3: 12 },
];

const ParkingChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Area1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Area2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Area3" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ParkingChart;
