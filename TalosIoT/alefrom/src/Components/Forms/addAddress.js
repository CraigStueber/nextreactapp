import React, {useState} from 'react'
import axios from 'axios'
import {apiUrl, apiKey, address, ownerEid} from '../../data'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './form.css';

function AddAddress() {
    const [show, setShow] = useState(false);
    const [state, setState] = React.useState({
        name: '',
        desc: '',
        type: '',
        city: '',
        state: '',
        street: '',
        postcode: ''
       });
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleFormSubmit = (event) =>{
   
        event.preventDefault();
        
      
        axios.post(`${apiUrl}${address}`, {
          name: state.name,
          owner_eid: `${ownerEid}`,
          street: state.street,
          city: state.city,
          state: state.state,
          postcode:state.postcode
        },{
          headers: {
              Authorization: `Bearer ${apiKey}`
          }
      } )
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
          Add New Address
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleFormSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Please complete the form below</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row >
                <Col xs={3}><label><h4>Name:</h4></label></Col>
                <Col xs={9}><input type="text" name="name" value={state.name} onChange={handleChange} required/></Col>
                
            </Row>
            <Row>
            <Col xs={3}><label><h4>Street:</h4> </label></Col>
            <Col xs={9}><input type = "text" name="street" value={state.street} onChange={handleChange} required /></Col>
               </Row> 
      <Row>
        <Col xs={3}> <label><h4>City:</h4></label></Col>
        <Col xs={9}> <input type = "text" name="city" value={state.city} onChange={handleChange} required/></Col>
      </Row>
    
         <Row>
        <Col xs={3}> <label><h4>State:</h4>  </label></Col>
        <Col xs={9}> <input type="text" name="state" value={state.state} onChange={handleChange} required /></Col>
      </Row>
   
         <Row>
        <Col xs={3}><label><h4>PostCode:</h4></label></Col>
        <Col xs={9}><input type="text" name="postcode" value={state.postcode} onChange={handleChange} required/></Col>
      </Row>
     

     
          </Modal.Body>
          <Modal.Footer>
             <Button variant="primary" onClick={handleClose} type="submit">
                Save New Address
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
  export default AddAddress;