// Users.jsx

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography, Card, Row, Col } from 'antd';
import dayjs from 'dayjs';
import utentiData from '../dati/utenti.json'; 
import RecentUsers from '../components/RecentUsers'; // Assicurati di importare correttamente il componente RecentUsers
import StatCard from '../components/StatCards.js';

const Users = () => {
    const [data, setData] = useState([]);
    const [recentUsers, setRecentUsers] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const weekDays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

            // Inizializza un array di lunghezza 7 per contenere i conteggi per ciascun giorno della settimana
            const dayCounts = [0, 0, 0, 0, 0, 0, 0];

            utentiData.forEach(utente => {
                const dayOfWeek = dayjs(utente.data_di_registrazione).day();
                // Incrementa il conteggio per il giorno della settimana corrispondente
                dayCounts[dayOfWeek]++;
            });

            const formattedData = weekDays.map((day, index) => ({
                name: day,
                count: dayCounts[index]
            }));

            setData(formattedData);

            const sortedUsers = utentiData.sort((a, b) => dayjs(b.data_di_registrazione) - dayjs(a.data_di_registrazione));
            setRecentUsers(sortedUsers.slice(0, 5));
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography.Title level={2}>Utenti</Typography.Title>
            <Row justify="center" gutter={16} style={{ marginBottom: '16px' }}>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Users"
                        number="48,345"
                        percentage="+20% month over month"
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="New users (current month)"
                        number="3,750"
                        percentage="+33% month over month"
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="New users (semester)"
                        number="13,468"
                        percentage="-8% month over month"
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Statistiche" style={{ height: '100%' }}>
                        <RecentUsers users={recentUsers} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Grafico degli utenti per giorno della settimana" style={{ height: '100%' }}>
                        {data.length > 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <BarChart width={600} height={400} data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                </BarChart>
                            </div>
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


/*
-mettere gli utenti totali che usano l'app
-quanti utenti si sono iscritti questo mese
-quanti utenti sono attivi da più di 1 mese sull'app
-creare qualche grafico
-grafico in che giorni della settimana l'applicazione viene più usata <RecentUsers users={recentUsers} />
*/