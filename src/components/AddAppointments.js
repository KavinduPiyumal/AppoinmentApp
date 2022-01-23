import React from 'react';
import '../App.css';
import { Form ,Button } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const AddAppointments = () => {
  
  const [toggleForm, settoggleForm] = useState(false);

  return <div className='AddAppoinmentForm'>

  <Button  onClick={()=>{settoggleForm(!toggleForm)}}
   variant="primary"  size="lg" className={`addappoinmentbutoon ${toggleForm ? 'addappoinmentbutoonRemoveRadius': ''}`}>
  <FontAwesomeIcon icon={faPlus} /> Add Appointments
  </Button>
  {
       toggleForm &&    
  <Form className='addform'>
  <Form.Group className="mb-3" >
    <Form.Label>Owner Name</Form.Label>
    <Form.Control 
    
    type="text" placeholder="Enter Owners Name" />
    <Form.Text className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Pet Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Pet Name" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Date</Form.Label>
    <Form.Control type="date"  />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Time</Form.Label>
    <Form.Control type="time" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Note</Form.Label>
    <Form.Control type="textarea" placeholder="Add Your Notes here" />
  </Form.Group>
  <Button variant="warning" type="submit">
    Submit
  </Button>
</Form> 
}
</div>;
};

export default AddAppointments;
