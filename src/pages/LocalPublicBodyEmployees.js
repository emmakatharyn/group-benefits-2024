import { Link } from "react-router-dom";

function LocalPublicBodyEmployees() {
  return (
    <div className='localPublicBodyEE'>
      <div className='container p-0 text-center'>
        <h1 className='my-4 ps-2 display-5'>
          New Hire Instructions for LPB Employees and Legislators
        </h1>
      </div>
      <div className='container portal-grid my-5'>
        <Link
          to='#'
          data-bs-target='#getStartedLPB'
          data-bs-toggle='modal'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-folder-plus'></i>
          <br />
          Getting Started as an LPB New Hire
        </Link>
        <Link
          to='https://eform.gsd.state.nm.us/EBB_BENEFITSENROLLMENT.aspx'
          target='_blank'
          className='btn btn-primary quicklink'
        >
          <i className='bx bx-link-alt'></i>
          <br />
          Take Me to the Enrollment Page
        </Link>
        <Link
          to='#'
          data-bs-target='#getStartedLegislator'
          data-bs-toggle='modal'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-folder-plus'></i>
          <br />
          Getting Started as a Legislator
        </Link>
        <Link to='/benefits-info' className='btn btn-primary quicklink'>
          <i className='bx bxs-file-pdf'></i>
          <br />
          Review Your Benefit Options
        </Link>
        <Link
          to='#'
          data-bs-target='#paperEnrollment'
          data-bs-toggle='modal'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-folder-plus'></i>
          <br />
          Paper Enrollment Forms
        </Link>
        <Link
          to='https://www.mybenefitsnm.com/Documents/2019_LifeInsurance_Enrollment.pdf'
          target='_blank'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-pen'></i>
          <br />I Wish to Enroll in Supplemental Term Life Only
        </Link>
        <Link to='/qualifying-event-lpb' className='btn btn-primary quicklink'>
          <i className='bx bxs-pen'></i>
          <br />I am NOT a New Hire and have a Qualifying Event
        </Link>
        <Link
          to='/documents/Employee-Benefits-Instructions-for-LPBs1-1-21.pdf'
          className='btn btn-primary quicklink'
          target='_blank'
        >
          <i className='bx bxs-file-pdf'></i>
          <br />
          New Hire Benefits Eligibility Acknowledgement Form
        </Link>
        <Link to='/pop-waivers' className='btn btn-primary quicklink'>
          <i className='bx bxs-file-pdf'></i>
          <br />
          Premium Only Plan (POP) Waiver Form
        </Link>
        <Link to='/term-life-calculator' className='btn btn-primary quicklink'>
          <i className='bx bxs-file-pdf'></i>
          <br />
          Supplemental Term Life Calculator
        </Link>
        <Link to='/benefits-calculator' className='btn btn-primary quicklink'>
          <i className='bx bxs-file-pdf'></i>
          <br />
          Benefits Premium Calculator
        </Link>
        <Link to='/domestic-partnership' className='btn btn-primary quicklink'>
          <i className='bx bxs-file-doc'></i>
          <br />
          Domestic Partnership Forms
        </Link>
      </div>
    </div>
  );
}

export default LocalPublicBodyEmployees;
