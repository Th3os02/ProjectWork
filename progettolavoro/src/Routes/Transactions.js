import React from 'react';
import { Typography, Row, Col } from 'antd';
import StatCard from '../components/StatCards';
import TransactionTable from '../components/TransactionTable';
import LineChartCard from '../components/LineChartCard'; 

const Transactions = () => {

    return (
        <div>
            <Typography.Title level={2}>Transazioni</Typography.Title>
            <Row justify="center" gutter={16} style={{ marginBottom: '16px' }}>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Guadagni"
                        number="8,345"
                        percentage="+20% mese su mese"
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="boh"
                        number=""
                        percentage="+13% mese su mese"
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Transazioni"
                        number=""
                        percentage="+15% settimana su settimana"
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <TransactionTable />
                </Col>
                <Col span={16}>
                    <LineChartCard />
                </Col>
            </Row>
        </div>
    );
};

export default Transactions;
