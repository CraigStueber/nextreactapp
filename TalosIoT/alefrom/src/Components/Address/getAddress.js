import React, {useState , useEffect, useContext} from 'react';

import axios from 'axios';

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import './address.css';

import Building1  from '../../assets/Buidling1.png';
import {ownerEid, apiUrl, apiKey, address} from '../../data'
import AddressBody from './addressBody';
import GetLocation from '../Location/getLocation';
import AddLocation from '../Forms/addLocation'


function ContextAwareToggle({ name, children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
   
 
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
     
      <Button variant="transparent"  type="button" className="AccordButton"
      style={{ backgroundColor: isCurrentEventKey ? '#2594c7' : 'rgba(201, 76, 76, 0.0)' }}
      onClick={decoratedOnClick}
       >
        <Container fluid>
                <Row xs={1} lg={2}>
                    <Col>
                        <img src={Building1} className="building" alt="Building"/>
                        <h1 className="AddressAccord">{name}</h1>
                    </Col>
                </Row>
        </Container>
      </Button>
    );
  }



function GetAddress(){
    const[addressData, setAddressData] = useState('');

    useEffect(() => {
        axios.get( `${apiUrl}${address}?owner_eid=${ownerEid}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => setAddressData(response.data))
        .catch(error => alert(`Please contact Talos IoT at info@talosiot.com ${error}`))
    }, [])
    
    return(
        <>
        {addressData && addressData.map(item => 
            <Accordion defaultActiveKey='0' key={item.eid} >
                <Card>
                    <Card.Header>
                        <ContextAwareToggle name={item.name} eventKey = '1' ></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <AddressBody address={item} />
                            <GetLocation parentEid={item.eid} parentName={item.name}/>
                            <AddLocation parentEid={item.eid} parentName={item.name}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        
        
        )}
      

       </>
    )
}

export default GetAddress;