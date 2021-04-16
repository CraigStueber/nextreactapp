import React, {useState} from 'react'
import axios from 'axios'
import {apiUrl, loc, apiKey} from '../../data'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddLocation({parentEid, parentName}) {
    const [show, setShow] = useState(false);
    const [state, setState] = React.useState({
        name: '',
        desc: '',
      
       });
    const handleFormSubmit = (event) =>{
    
        event.preventDefault();
        
      
        axios.post(`${apiUrl}${loc}`,{
          name: state.name,
          desc: state.desc,
          parent_eid: `${parentEid}`
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
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
         Add new location {parentName}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleFormSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <Row>
                <Col xs={4}><label><h5>Name:</h5></label></Col>
                <Col xs={8}> <input type="text" name="name" value={state.name} onChange={handleChange} required/></Col>
            </Row>
            <Row>
                <Col xs={4}><label><h5>Description:</h5></label></Col>
                <Col xs={8}> <input type="text" name="desc" value={state.desc} onChange={handleChange} required/></Col>
            </Row>
            

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Save New Location
            </Button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
  export default AddLocation;