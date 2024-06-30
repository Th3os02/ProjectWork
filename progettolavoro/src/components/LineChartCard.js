import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from 'antd';

const sampleData = [
    { day: 'Lunedì', app: 4000, meter: 3000 },
    { day: 'Martedì', app: 3500, meter: 3200 },
    { day: 'Mercoledì', app: 3800, meter: 3100 },
    { day: 'Giovedì', app: 3900, meter: 2600 },
    { day: 'Venerdì', app: 4500, meter: 3500 },
    { day: 'Sabato', app: 4200, meter: 3300 },
    { day: 'Domenica', app: 4000, meter: 3000 },
];

const LineChartCard = ({ data = sampleData }) => {
    return (
        <Card title="Grafico delle transazioni" style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LineChart width={600} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="app" stroke="#8884d8" />
                    <Line type="monotone" dataKey="meter" stroke="#82ca9d" />
                </LineChart>
            </div>
        </Card>
    );
};

export default LineChartCard;
