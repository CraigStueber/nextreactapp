import React, {useState , useEffect, useContext} from 'react';
import axios from 'axios'
import {apiUrl, apiKey} from '../../data'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import EquipmentTable from './equipmentTable'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button'


import '../../App.css';
import AddEquipment from '../Forms/addEquipment';
import EditEquipment from '../Edit/editEquipment';

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
     
                        
                        <h5 className="EquipAccord">{name}</h5>
           
      </Button>
    );
  }

function GetEquipment({parentEid , addressName}) {
    const [equip , setEquipment] = useState('');
    
    const parent= `${parentEid}`
    
    var equipment = equip.equipment
    useEffect(() => {
        axios.get(`${apiUrl}/api/ale/v1/location/downstream?eid=${parent}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => setEquipment(response.data))
          
       
         
          
    }, [parent])
 
    return(
     <>
     <h3>Equipment at {addressName}</h3>
        {equipment && equipment.map(item =>
        <Accordion defaultActiveKey="0" key={item.eid}>
            <Card>
                <Card.Header>
                <ContextAwareToggle name={item.name} eventKey = '1' ></ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <EquipmentTable equip={item} />
                    <EditEquipment equip={item} />
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
      
        
        )}
        <AddEquipment locationEid={parentEid} />
     </>
    )





}

export default GetEquipment;