import React, {useState} from 'react'
import {apiUrl, equipment, apiKey} from '../../data'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddEquipment({locationEid}) {
    const [show, setShow] = useState(false);
    const [state, setState] = React.useState({
        name: '',
        desc: '',
        type: ['Package'],
        make: '',
        model: '',
        serial: '',
        lat: '',
        lng: '',
        eid: ''
       });
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = (event) =>{
  
        event.preventDefault();
        
      
        axios.post(`${apiUrl}${equipment}`,   {
          name: state.name,
          location_eid: `${locationEid}`,
          make: state.make,
          model: state.model,
          serial: state.serial,
          lat: state.lat,
          lng: state.lng,
          types: state.type,
          eid: state.eid,
          desc: state.desc
        
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
         Add Equipment
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleFormSubmit} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
                <Col xs={4}><label><h6>Name:</h6></label></Col>
                <Col xs={8}><input type="text" name="name" value={state.name} onChange={handleChange} required/></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Description</h6></label></Col>
                <Col xs={8}> <input type="text" name="desc" value={state.desc} onChange={handleChange} required/></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Make</h6></label></Col>
                <Col xs={8}><input type="text" name="make" value={state.make} onChange={handleChange}  required/></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Model</h6></label></Col>
                <Col xs={8}><input type="text" name="model" value={state.model} onChange={handleChange} required /></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Serial Number</h6></label></Col>
                <Col xs={8}> <input type="text" name="serial" value={state.serial} onChange={handleChange} required/></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Latitude</h6></label></Col>
                <Col xs={8}><input type="number" name="lat" value={state.lat} onChange={handleChange} required /></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Longitude</h6></label></Col>
                <Col xs={8}><input type="number" name="lng" value={state.lng} onChange={handleChange} required/></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Type</h6></label></Col>
                <Col xs={8}>
                <select name="type">
                    <option value="Package">Package</option>
                </select>
                </Col>
            </Row>
            <Row>
                <Col xs={4}><label><h6>Eid</h6></label></Col>
                <Col xs={8}><input type="text" name="eid" value={state.eid} onChange={handleChange} required/></Col>
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Save New Equipment
            </Button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
  export default AddEquipment;