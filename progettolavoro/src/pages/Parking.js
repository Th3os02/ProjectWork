import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import supabase from '../supabaseClient';
import { Typography, Card, Row, Col } from 'antd';

const Parking = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data: parking, error } = await supabase
                .from('parking')
                .select('*');

            if (error) console.log('Error fetching data: ', error);
            else setData(parking);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography.Title level={2}>Parcheggi</Typography.Title>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Statistiche">
                        {/* Inserisci qui le statistiche */}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Grafico dei parcheggi">
                        <PieChart width={400} height={400}>
                            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} fill="#82ca9d" label />
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Parking;
