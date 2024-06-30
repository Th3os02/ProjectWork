import React from 'react';
import { Card } from 'antd';

const TransactionTable = () => {
    return (
        <Card title="Statistiche">
            <div style={{ overflowX: 'auto' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <div style={{ minWidth: '120px' }}>Fonte</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>Sessioni</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>Prezzo</div>
                </div>
                <hr />
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '120px' }}>App</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>4321</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>2,50$</div>
                </div>
                <hr />
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '120px' }}>App</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>4033</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>6,00$</div>
                </div>
                <hr />
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '120px' }}>App</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>3128</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>1,20$</div>
                </div>
                <hr />
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '120px' }}>Street</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>2104</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>2,50$</div>
                </div>
                <hr />
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '120px' }}>Street</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>2003</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>3,00$</div>
                </div>
                <hr />
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '120px' }}>App</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>1894</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>9,00$</div>
                </div>
                <hr />
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ minWidth: '120px' }}>Street</div>
                    <div style={{ textAlign: 'right', flex: 1, marginLeft: '24px' }}>405</div>
                    <div style={{ textAlign: 'right', minWidth: '100px' }}>4,33$</div>
                </div>
            </div>
        </Card>
    );
};

export default TransactionTable;
