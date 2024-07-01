import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import StatCard from '../components/StatCards';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key'; 
const supabase = createClient(supabaseUrl, supabaseKey);

const Parking = () => {
    const [sensorCount, setSensorCount] = useState(0);
    const [activeSensorCount, setActiveSensorCount] = useState(0);
    const [segnalazioniCount, setSegnalazioniCount] = useState(0);

    useEffect(() => {
        const countSensors = () => {
        
            const sensoriData = require('../dati/sensori.json');
            const totalSensors = sensoriData.length;
            const activeSensors = sensoriData.filter(sensor => sensor.attivo).length;
            setSensorCount(totalSensors);
            setActiveSensorCount(activeSensors);
        };

        const countSegnalazioni = async () => {
            const { data, error, count } = await supabase
                .from('segnalazioni')
                .select('id')
                .count(); 

            if (error) {
                console.error('Errore durante il recupero delle segnalazioni:', error.message);
                return;
            }

            setSegnalazioniCount(count);
        };
        countSensors();
        countSegnalazioni();
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
                        title="Segnalazioni fatte"
                        number={segnalazioniCount} 
                        percentage=""
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
