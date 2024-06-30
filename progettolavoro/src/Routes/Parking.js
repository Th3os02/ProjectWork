import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import { Typography, Card, Row, Col } from 'antd';

const Parking = () => {
    
    return (
        <div>
            <Typography.Title level={2}>Parcheggi</Typography.Title>
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
