import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from 'antd';

const LineChartCard = ({ data }) => {
    return (
        <Card title="Grafico delle transazioni">
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount1" stroke="#8884d8" />
                <Line type="monotone" dataKey="amount2" stroke="#82ca9d" />
            </LineChart>
        </Card>
    );
};

export default LineChartCard;
