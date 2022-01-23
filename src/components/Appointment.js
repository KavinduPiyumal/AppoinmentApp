import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap';
import '../App.css';
const Appointment = ({appointment,onDeleteAppointment}) => {
  return <li className="my-5 px-3 py-3">
  
   <div className="flex-grow">
       <Button onClick={() => onDeleteAppointment(appointment.id) }
           type="button"
           className="deletebutton">
          <FontAwesomeIcon icon={faTrash} />
       </Button>
       <div className="d-flex justify-content-between">
          <span className="petname">{appointment.petName}</span>
           <span className="">{appointment.aptDate}</span>
      </div>
    <div className=''><b className="font-bold">Owner: </b>{appointment.ownerName}</div>
  <div className="leading-tight">{appointment.aptNotes}</div>
</div>
</li>;
};

export default Appointment;
