import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import supabase from '../supabaseClient';
import { Typography, Card, Row, Col } from 'antd';
import dayjs from 'dayjs';

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data: utenti, error } = await supabase
                .from('utente')
                .select('*');

            if (error) {
                console.log('Error fetching data: ', error);
            } else {
                // Raggruppare i dati per mese
                const groupedData = utenti.reduce((acc, utente) => {
                    const month = dayjs(utente.Data_di_registrazione).format('MMMM');
                    if (!acc[month]) {
                        acc[month] = 0;
                    }
                    acc[month]++;
                    return acc;
                }, {});

                // Trasformare i dati raggruppati in un array
                const formattedData = Object.keys(groupedData).map(month => ({
                    name: month,
                    count: groupedData[month]
                }));

                setData(formattedData);
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
                        {data.length > 0 ? (
                            <BarChart width={500} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        ) : (
                            <p>Nessun dato disponibile</p>
                        )}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Users;
