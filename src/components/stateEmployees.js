import React from "react";
import { Link } from "react-router-dom";

function StateEmployees() {
  return (
    <div className='container portal-grid my-5' id='state-ee-grid'>
      <Link to='/state-agency-employees' className='btn btn-primary quicklink'>
        <i className='bx bxs-folder-plus'></i>
        <br />I am a New Hire
      </Link>
      {/* previously linked to employeeportalsub2 */}
      <Link to='/qualifying-event-state' className='btn btn-primary quicklink'>
        <i className='bx bxs-calendar-exclamation'></i>
        <br />I have a Qualifying Event
      </Link>

      {/* modal here */}
      <button
        href=''
        data-bs-target='#newHireOrientation'
        data-bs-toggle='modal'
        className='btn btn-primary quicklink'
      >
        <i className='bx bxs-info-circle'></i>
        <br />
        New Hire & Qualifying Event Orientation
      </button>

      {/* benefitsinformation.html */}
      <Link to='/benefits-info' className='btn btn-primary quicklink'>
        <i className='bx bxs-file-doc'></i>
        <br />
        Benefits Information
      </Link>

      <Link to='/share' className='btn btn-primary quicklink'>
        <i className='bx bx-book-open'></i>
        <br />
        SHARE Self Service Manual
      </Link>
      <Link to='/admin-letters' className='btn btn-primary quicklink'>
        <i className='bx bxs-star'></i>
        <br />
        Special Rules: LWOP, FMLA and More
      </Link>
      <Link to='/domestic-partnership' className='btn btn-primary quicklink'>
        <i className='bx bxs-file-pdf'></i>
        <br />
        Domestic Partnership Forms
      </Link>
      <Link
        to='/documents/Aetna_Network_Flyer_proof_2.pdf'
        // to='/documents/POP-SoNM-NOTICE-OF-WAIVER-2023.pdf'
        className='btn btn-primary quicklink'
        target='_blank'
      >
        <i className='bx bxs-pen'></i>
        <br />
        POP Waiver Form (State)
      </Link>
    </div>
  );
}

export default StateEmployees;
