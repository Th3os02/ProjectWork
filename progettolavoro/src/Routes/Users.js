import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { Typography, Card, Row, Col } from 'antd';
import dayjs from 'dayjs';
import utentiData from '../dati/utenti.json';
import RecentUsers from '../components/RecentUsers';
import StatCard from '../components/StatCards';

const Users = () => {
    const [data, setData] = useState([]);
    const [recentUsers, setRecentUsers] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    const [usageData, setUsageData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const monthData = [
                { name: 'Agosto', value: 0 },
                { name: 'Settembre', value: 650 },
                { name: 'Ottobre', value: 1350 },
                { name: 'Novembre', value: 2200 },
                { name: 'Dicembre', value: 3100 },
                { name: 'Gennaio', value: 4200 },
                { name: 'Febbraio', value: 5000 },
                { name: 'Marzo', value: 6200 },
                { name: 'Aprile', value: 7400 },
                { name: 'Maggio', value: 7900 },
                { name: 'Giugno', value: 8305 },
                { name: 'Luglio', value: 8345 }
            ];

            setLineChartData(monthData);

            const weekDays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
            const dayCounts = [0, 0, 0, 0, 0, 0, 0];

            utentiData.forEach(utente => {
                const dayOfWeek = dayjs(utente.data_di_registrazione).day();
                dayCounts[dayOfWeek]++;
            });

            const formattedData = weekDays.map((day, index) => ({
                name: day,
                count: dayCounts[index]
            }));

            setData(formattedData);

            const sortedUsers = [...utentiData].sort((a, b) => dayjs(b.data_di_registrazione) - dayjs(a.data_di_registrazione));
            setRecentUsers(sortedUsers.slice(0, 5));

            
            const fixedUsageData = [
                { name: 'Domenica', count: 6750 },
                { name: 'Lunedì', count: 4980 },
                { name: 'Martedì', count: 3780 },
                { name: 'Mercoledì', count: 3270 },
                { name: 'Giovedì', count: 4070 },
                { name: 'Venerdì', count: 5900 },
                { name: 'Sabato', count: 7495 },
            ];

            setUsageData(fixedUsageData);
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
                        number="140"
                        percentage="+13% mese su mese"
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
                    <Card title="Grafico utenti inscritti questa settimana" style={{ height: '100%' }}>
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
                <Col span={8}>
                    <Card title="Ultimi utenti inscritti" style={{ height: '100%' }}>
                        <RecentUsers users={recentUsers} />
                    </Card>
                </Col>
                <Col span={16}>
                    <Card title="Utilizzo dell'app per giorno della settimana" style={{ height: '100%' }}>
                        {usageData.length > 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <BarChart width={600} height={400} data={usageData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                    <YAxis tick={false}/>
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#82ca9d" />
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
