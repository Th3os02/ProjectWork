import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, Select } from 'antd';
import jsonData from '../dati/data.json';

const { Option } = Select;

const LineChartCard = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('Gennaio');

    useEffect(() => {
        setData(jsonData);
        setFilteredData(jsonData.filter(item => item.month === selectedMonth));
    }, [selectedMonth]);

    const handleMonthChange = (value) => {
        setSelectedMonth(value);
    };

    return (
        <Card title="Grafico delle transazioni" style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Select value={selectedMonth} onChange={handleMonthChange} style={{ width: 200, marginBottom: 20 }}>
                    {['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'].map(month => (
                        <Option key={month} value={month}>{month}</Option>
                    ))}
                </Select>
                <LineChart width={700} height={400} data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="app" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Parchimetro" stroke="#82ca9d" />
                </LineChart>
            </div>
        </Card>
    );
};

export default LineChartCard;

