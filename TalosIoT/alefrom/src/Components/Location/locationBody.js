
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GetEquipment from "../Equipment/getEquipment";
import LocationDetails from './locationDetail';

function LocationBody ({loc}) {

    return(
        <Row>
        <Col xs={12} md={6}><LocationDetails loc={loc} /></Col>
        <Col xs={12} md={6}><GetEquipment parentEid={loc.eid} addressName={loc.name} /></Col>
        </Row>
    )
}

export default LocationBody