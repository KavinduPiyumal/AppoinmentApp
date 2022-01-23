import React from 'react';
import '../App.css';
import { Form ,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const AddAppointments = ({onSendAppoinment , lastId}) => {
  
  const [toggleForm, settoggleForm] = useState(false);

  const clearData = {
    ownerName:'',
    petName:'',
    aptDate:'',
    aptTime:'',
    aptNotes:''
  }
  const [formData, setformData] = useState(clearData);
  
  function formDataPublish(){
    const appoinmentInfo = {
      id:lastId +1,
      ownerName:formData.ownerName,
      petName:formData.petName,
      aptDate:formData.aptDate + '' + formData.aptTime,
      aptNotes:formData.aptNotes
    }
    onSendAppoinment(appoinmentInfo);
    setformData(clearData);
    settoggleForm(!toggleForm);
  }

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
      onChange={(event) => {setformData({...formData, ownerName:event.target.value})}}
      value={formData.ownerName}
    type="text" placeholder="Enter Owners Name" />
    <Form.Text className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Pet Name</Form.Label>
    <Form.Control 
      onChange={(event) => {setformData({...formData, petName:event.target.value})}}
      value={formData.petName}
    type="text" placeholder="Enter Pet Name" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Date</Form.Label>
    <Form.Control 
      onChange={(event) => {setformData({...formData, aptDate:event.target.value})}}
      value={formData.aptDate}
    type="date"  />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Time</Form.Label>
    <Form.Control 
       onChange={(event) => {setformData({...formData, aptTime:event.target.value})}}
       value={formData.aptTime}
    type="time" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Note</Form.Label>
    <Form.Control 
      onChange={(event) => {setformData({...formData, aptNotes:event.target.value})}}
      value={formData.aptNotes}
    type="textarea" placeholder="Add Your Notes here" />
  </Form.Group>
  <Button onClick={formDataPublish}
  variant="warning" type="submit">
    Submit
  </Button>
</Form> 
}
</div>;
};

export default AddAppointments;
