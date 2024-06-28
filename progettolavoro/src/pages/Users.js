import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import supabase from '../supabaseClient';
import { Typography, Card, Row, Col } from 'antd';

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data: users, error } = await supabase
                .from('users')
                .select('*');

            if (error) console.log('Error fetching data: ', error);
            else {
                console.log(users);  // Controlla la struttura dei dati
                setData(users);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography.Title level={2}>Utenti</Typography.Title>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Statistiche">
                        {/* Inserisci qui le statistiche */}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Grafico degli utenti">
                        <BarChart width={500} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Users;
