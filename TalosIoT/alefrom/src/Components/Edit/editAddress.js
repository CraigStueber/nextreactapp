import React, {useState} from 'react'
import {apiUrl,  address, ownerEid, apiKey} from '../../data'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function EditAddress({loc}) {
    
    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        name: `${loc.name}`,
        desc: `${loc.desc}`,
        street: `${loc.street}`,
        city: `${loc.city}`,
        state: `${loc.state}`,
        postcode: `${loc.postcode}`
        
       });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


     const handleFormSubmit = (event) =>{
  
        event.preventDefault();
        
      
        axios.put(`${apiUrl}${address}?eid=${loc.eid}`,   {
          name: state.name,
          owner_eid: `${ownerEid}`,
          desc: state.desc,
          street: state.street,
          city: state.city,
          state: state.state,
          postcode: state.postcode,
          eid: `${loc.eid}`
        
        }, {
          headers: {
              Authorization: `Bearer ${apiKey}`
          }
      })
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location.reload(true)
         
        })
        
      }
    
      const handleChange = (event) => {
        setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
          Edit {loc.name}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleFormSubmit} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row >
                <Col xs={3}><label><h4>Name:</h4></label></Col>
                <Col xs={9}><input type="text" name="name" value={state.name} onChange={handleChange} /></Col>
                
            </Row>
            <Row>
            <Col xs={3}><label><h4>Street:</h4> </label></Col>
            <Col xs={9}><input type = "text" name="street" value={state.street} onChange={handleChange} /></Col>
               </Row> 
      <Row>
        <Col xs={3}> <label><h4>City:</h4></label></Col>
        <Col xs={9}> <input type = "text" name="city" value={state.city} onChange={handleChange} /></Col>
      </Row>
    
         <Row>
        <Col xs={3}> <label><h4>State:</h4>  </label></Col>
        <Col xs={9}> <input type="text" name="state" value={state.state} onChange={handleChange}  /></Col>
      </Row>
   
         <Row>
        <Col xs={3}><label><h4>PostCode:</h4></label></Col>
        <Col xs={9}><input type="text" name="postcode" value={state.postcode} onChange={handleChange} /></Col>
      </Row>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
  export default EditAddress;