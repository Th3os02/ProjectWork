import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { Typography, Card, Row, Col } from 'antd';
import dayjs from 'dayjs';
import utentiData from '../dati/utenti.json';
import RecentUsers from '../components/RecentUsers';
import StatCard from '../components/StatCards';

const Users = () => {
    const [data, setData] = useState([]);
    const [recentUsers, setRecentUsers] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);

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

            const sortedUsers = [...utentiData].sort((a, b) => dayjs(b.data_di_registrazione) - dayjs(a.data_di_registrazione));
            setRecentUsers(sortedUsers.slice(0, 5));

            // Creazione dei dati per il grafico a linea (esempio di dati casuali)
            const lineData = weekDays.map((day, index) => ({
                name: day,
                value: Math.floor(Math.random() * 100) // Valore casuale per scopi di esempio
            }));
            setLineChartData(lineData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Typography.Title level={2}>Utenti</Typography.Title>
            <Row justify="center" gutter={16} style={{ marginBottom: '16px' }}>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Utenti totali"
                        number="8,345"
                        percentage="+20% mese su mese"
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Nuovi utenti (questo mese)"
                        number="40"
                        percentage="+33% mese su mese"
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Utenti attivi (ultimi 7 giorni)"
                        number="2,468"
                        percentage="+15% settimana su settimana"
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
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
            <Row gutter={16} style={{ marginTop: '16px' }}>
                <Col span={12}>
                    <Card title="Grafico utenti nel tempo" style={{ height: '100%' }}>
                        {lineChartData.length > 0 ? (
                            <LineChart width={600} height={400} data={lineChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            </LineChart>
                        ) : (
                            <p>Nessun dato disponibile</p>
                        )}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="si" style={{ height: '100%' }}>

                            <p>Nessun dato disponibile</p>
                        
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Users;
