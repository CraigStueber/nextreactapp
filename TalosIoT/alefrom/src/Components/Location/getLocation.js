import React, {useState , useEffect, useContext} from 'react';
import axios from 'axios'
import {apiUrl, apiKey} from '../../data'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button'

import LocationBody from './locationBody'
import '../../App.css';

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
function GetLocation({parentEid , parentName}) {
    const [loc , setLoc] = useState('');
    
    const parent= `${parentEid}`

    var location = loc.locations
  
    
    useEffect(() => {
        axios.get(`${apiUrl}/api/ale/v1/location/downstream?eid=${parent}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => setLoc(response.data))
          
       
         
          
    }, [parent])
 
    return(
     <>
          <h3>Locations at {parentName}</h3>
        {location && location.map(item =>
        <Accordion defaultActiveKey="0" key={item.eid}>
            <Card>
                <Card.Header>
                <ContextAwareToggle name={item.name} eventKey = '1' ></ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                   <LocationBody loc={item} />

                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        
        
        )}


     </>
    )





}

export default GetLocation;