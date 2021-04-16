import AddressDetail from "./addressDetail";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GetEquipment from "../Equipment/getEquipment";
import EditAddress from "../Edit/editAddress";

function AddressBody ({address}) {
    
    return(
        <Container>
        <Row>
        <Col xs={12} md={6}><AddressDetail address={address} /></Col>
        <Col xs={12} md={6}><GetEquipment parentEid={address.eid} addressName={address.name} /></Col>
        
        </Row>
        <EditAddress loc={address} />
        </Container>
    )
}

export default AddressBody;