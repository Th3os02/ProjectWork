import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import StatCard from '../components/StatCards';
import ParkingChart from '../components/ParkingChart'; 
import parkingData from '../dati/parcheggi.json'; 

const Parking = () => {
    const [sensorCount, setSensorCount] = useState(0);
    const [activeSensorCount, setActiveSensorCount] = useState(0);

    useEffect(() => {

        const countSensors = () => {
            const sensoriData = require('../dati/sensori.json');
            const totalSensors = sensoriData.length;
            const activeSensors = sensoriData.filter(sensor => sensor.attivo).length;
            setSensorCount(totalSensors);
            setActiveSensorCount(activeSensors);
        };

        countSensors();
    }, []);

    const calculateParkingStats = () => {
        const totalParcheggi = parkingData.parcheggi.reduce((acc, parcheggio) => acc + parcheggio.posti_totali, 0);
        
        const totalParcheggiAPagamento = parkingData.parcheggi
            .filter(p => p.a_pagamento)
            .reduce((acc, parcheggio) => acc + parcheggio.posti_totali, 0);
        
        const totalParcheggiNonAPagamento = parkingData.parcheggi
            .filter(p => !p.a_pagamento)
            .reduce((acc, parcheggio) => acc + parcheggio.posti_totali, 0);
    
        return {
            totalParcheggi,
            totalParcheggiAPagamento,
            totalParcheggiNonAPagamento,
        };
    };

    const { totalParcheggi, totalParcheggiAPagamento, totalParcheggiNonAPagamento } = calculateParkingStats();

    return (
        <div>
            <Typography.Title level={2}>Parcheggi</Typography.Title>
            <Row justify="center" gutter={16} style={{ marginBottom: '16px' }}>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Sensori posizionati nel comune"
                        number={sensorCount}
                        percentage=""
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Sensori attivi nel comune"
                        number={activeSensorCount}
                        percentage=""
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Segnalazioni fatte"
                        number="0"
                    />
                </Col>
            </Row>
            <Row justify="center" gutter={16} style={{ marginBottom: '16px' }}>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Totale parcheggi nel comune"
                        number={totalParcheggi}
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Totale parcheggi a pagamento"
                        number={totalParcheggiAPagamento}
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Totale parcheggi non a pagamento"
                        number={totalParcheggiNonAPagamento}
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card title="Grafico delle ore di punta dei parcheggi">
                        <ParkingChart />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Parking;
