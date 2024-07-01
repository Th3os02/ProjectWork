import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import StatCard from '../components/StatCards';
import sensoriData from '../dati/sensori.json'; // importa il file JSON

const Parking = () => {
    const [sensorCount, setSensorCount] = useState(0);
    const [activeSensorCount, setActiveSensorCount] = useState(0);

    useEffect(() => {
        // Conta i sensori totali e quelli attivi
        const countSensors = () => {
            const totalSensors = sensoriData.length;
            const activeSensors = sensoriData.filter(sensor => sensor.attivo).length;
            setSensorCount(totalSensors);
            setActiveSensorCount(activeSensors);
        };

        countSensors();
    }, []);

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
                        title="Multe fatte per mancato pagamento"
                        number=""
                        percentage="+15% settimana su settimana"
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Statistiche">
                        {/* Inserisci qui le statistiche */}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Grafico dei parcheggi">
                        {/* Inserisci qui il grafico */}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Parking;
