import { Typography, Card, Row, Col } from 'antd';
import StatCard from '../components/StatCards';

const Parking = () => {
    
    return (
        <div>
            <Typography.Title level={2}>Parcheggi</Typography.Title>
            <Row justify="center" gutter={16} style={{ marginBottom: '16px' }}>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="Sensori posizionati(nel comune)"
                        number=""
                        percentage="+10% mese su mese"
                    />
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <StatCard
                        title="multe fatte per mancato pagamento"
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
                        
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Parking;

/*
-creare una tabella a linea con 3 linee che mostra l'affluenza nei parcheggi nelle diverse ore
-mettere il numero di sensori messi, quelli attivi, multe fatte per non pagamento
-tabella costi di manutenzione sensori
-multe fatte per non pagamento
*/
