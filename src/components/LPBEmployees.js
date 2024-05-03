import React from "react";
import { Link } from "react-router-dom";

function LPBEmployees() {
  return (
    <div className='container portal-grid my-5' id='LPB-ee-grid'>
      <Link to='LocalPublicBodyEmployee.html' className='btn btn-primary quicklink'>
        <i className='bx bxs-folder-plus'></i>
        <br />I am a New Hire
      </Link>

      <Link to='/qualifying-event-lpb' className='btn btn-primary quicklink'>
        <i className='bx bxs-calendar-exclamation'></i>
        <br />I have a Qualifying Event
      </Link>

      <Link
        to='/movies/Presentation_Recording_2021-12-30-14-EKR-REsp.mp4'
        className='btn btn-primary quicklink'
      >
        <i className='bx bxs-info-circle'></i>
        <br />
        New Hire & Qualifying Event Orientation
      </Link>

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
        to='/documents/POP-SoNM-NOTICE-OF-WAIVER-2023.pdf'
        className='btn btn-primary quicklink'
        target='_blank'
      >
        <i className='bx bxs-pen'></i>
        <br />
        POP Waiver Form (LPB)
      </Link>
    </div>
  );
}

export default LPBEmployees;
