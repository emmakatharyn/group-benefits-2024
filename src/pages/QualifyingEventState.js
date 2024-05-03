import React from "react";
import { Link } from "react-router-dom";

const handleClick = () => {
  console.log("Modal tile was clicked");
};

// employeePortalSub2
function QualifyingEventState() {
  return (
    <div className='container portal-grid my-5'>
      {/* modal trigger */}
      <button className='btn btn-primary quicklink' onClick={handleClick}>
        <i className='bx bxs-info-circle'></i>
        What is a Qualifying Event?
      </button>

      <Link
        to='https://eform.gsd.state.nm.us/ebb_benefitsenrollment.aspx'
        className='btn btn-primary quicklink'
        target='_blank'
      >
        <i className='bx bxs-file-pdf'></i>
        Online Enrollment Form for Qualifying Events
      </Link>

      <Link
        to='/documents/FSA_Change_Form_Fill_1_1_23.pdf'
        className='btn btn-primary quicklink'
        target='_blank'
      >
        <i className='bx bx-link'></i>
        FSA and Dependent Care Qualifying Event Form
      </Link>

      <button className='btn btn-primary quicklink' onClick={handleClick}>
        <i className='bx bxs-car'></i>
        Transit and Parking Benefit Changes
      </button>

      <button className='btn btn-primary quicklink' onClick={handleClick}>
        <i className='bx bx-shield-alt-2'></i> Supplemental Life Changes
      </button>

      <Link to='/state-agency-employees' className='btn btn-primary quicklink'>
        <i className='bx bxs-info-circle'></i>I'm a New Hire and Do NOT have a
        Qualifying Event
      </Link>
    </div>
  );
}

export default QualifyingEventState;
