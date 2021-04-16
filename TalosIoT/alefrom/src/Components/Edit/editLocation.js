import React, {useState} from 'react'
import {loc, apiUrl, apiKey} from '../../data'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function EditLocation({location}) {
    
    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        name: `${location.name}`,
        desc: `${location.desc}`,
       });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


     const handleFormSubmit = (event) =>{
  
        event.preventDefault();
        
      
        axios.put(`${apiUrl}${loc}?eid=${location.eid}`,   {
          name: state.name,
          desc: state.desc,
          eid: `${location.eid}`
        
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
          <Row>
                <Col xs={4}><label><h5>Name:</h5></label></Col>
                <Col xs={8}> <input type="text" name="name" value={state.name} onChange={handleChange} /></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h5>Description:</h5></label></Col>
                <Col xs={8}> <input type="text" name="desc" value={state.desc} onChange={handleChange}/></Col>
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
  
  export default EditLocation;