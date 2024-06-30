import React from 'react';
import { Card, Typography } from 'antd';

const StatCard = ({ title, number, percentage }) => {
    return (
        <Card title={title} style={{ textAlign: 'center', padding: '10px 5px', borderRadius: '8px' }}>
            <Typography.Title level={2} style={{ margin: 0 }}>{number}</Typography.Title>
            <Typography.Text type="secondary">{percentage}</Typography.Text>
        </Card>
    );
};

export default StatCard;
