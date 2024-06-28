import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import supabase from '../supabaseClient';
import { Typography, Card, Row, Col } from 'antd';

const Transactions = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data: transactions, error } = await supabase
                .from('transactions')
                .select('*');

            if (error) console.log('Error fetching data: ', error);
            else setData(transactions);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography.Title level={2}>Transazioni</Typography.Title>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Statistiche">
                        {/* Inserisci qui le statistiche */}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Grafico delle transazioni">
                        <LineChart width={500} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                        </LineChart>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Transactions;
