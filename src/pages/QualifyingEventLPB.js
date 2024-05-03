import React from "react";
import { Link } from "react-router-dom";

const handleClick = () => {
  console.log("Modal tile was clicked");
};

function QualifyingEventLPB() {
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
        Online Enrollment Form for LPB Qualifying Events
      </Link>

      {/* modal trigger */}
      <button className='btn btn-primary quicklink' onClick={handleClick}>
        <i className='bx bxs-info-circle'></i>
        Printable Enrollment Forms for LPB Employees
      </button>

      <Link
        to='/documents/EnrollmentChange_Legislators_FY21.pdf'
        className='btn btn-primary quicklink'
        target='_blank'
      >
        <i className='bx bxs-file-pdf'></i>
        Legislator Enrollment Form for Qualifying Events
      </Link>

      <button className='btn btn-primary quicklink' onClick={handleClick}>
        <i className='bx bx-shield-alt-2'></i> Supplemental Life Changes
      </button>

      <Link to='/lpb-employees' className='btn btn-primary quicklink'>
        <i className='bx bxs-info-circle'></i>I'm a New Hire and Do NOT have a
        Qualifying Event
      </Link>
    </div>
  );
}

export default QualifyingEventLPB;
