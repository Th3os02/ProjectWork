import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import supabase from '../supabaseClient';
import { Typography, Card, Row, Col } from 'antd';
import dayjs from 'dayjs';
import RecentUsers from '../components/RecentUsers';

const Users = () => {
    const [data, setData] = useState([]);
    const [recentUsers, setRecentUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data: utenti, error } = await supabase
                .from('utente')
                .select('*');

            if (error) {
                console.log('Error fetching data: ', error);
            } else {
                const monthOrder = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                const groupedData = utenti.reduce((acc, utente) => {
                    const month = dayjs(utente.Data_di_registrazione).format('MMMM');
                    if (!acc[month]) {
                        acc[month] = 0;
                    }
                    acc[month]++;
                    return acc;
                }, {});

                // Trasformare i dati raggruppati in un array e ordinarli
                const formattedData = Object.keys(groupedData)
                    .map(month => ({
                        name: month,
                        count: groupedData[month]
                    }))
                    .sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name));

                setData(formattedData);

                // Ordinare gli utenti per data di registrazione e prendere gli ultimi 5
                const sortedUsers = utenti.sort((a, b) => dayjs(b.Data_di_registrazione) - dayjs(a.Data_di_registrazione));
                setRecentUsers(sortedUsers.slice(0, 5));
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
                        <RecentUsers users={recentUsers} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Grafico degli utenti">
                        {data.length > 0 ? (
                            <BarChart width={500} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-90} textAnchor="end" height={100} />
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
