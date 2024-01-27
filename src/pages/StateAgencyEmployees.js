import { Link } from "react-router-dom";

function StateAgencyEmployees() {
  return (
    <div className='stateAgencyEE'>
      <div className='container p-0 text-center'>
        <h1 className='my-4 ps-2 display-5'>
          New Hire Instructions for State Employees
        </h1>
      </div>
      <div className='container portal-grid my-5'>
        <Link
          to='#'
          data-bs-target='#getStarted'
          data-bs-toggle='modal'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-folder-plus'></i>
          <br />
          Getting Started as a New Hire
        </Link>

        <Link to='/benefits-info' className='btn btn-primary quicklink'>
          <i className='bx bxs-file-pdf'></i>
          <br />
          Review Your Benefit Options
        </Link>
        <Link
          to='https://eform.gsd.state.nm.us/ebb_benefitsenrollment.aspx'
          target='_blank'
          className='btn btn-primary quicklink'
        >
          <i className='bx bx-link-alt'></i>
          <br />
          Take Me to the Enrollment Page
        </Link>
        <Link
          to='https://eform.gsd.state.nm.us/EBB_HealthCareDependentCare.aspx'
          target='_blank'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-credit-card'></i>
          <br />I am Enrolling in FSA or Dependent Care Only
        </Link>
        <Link
          to='https://eform.gsd.state.nm.us/EBB_Transportation_Commuting.aspx'
          target='_blank'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-car'></i>
          <br />I Wish to Enroll in Transit/Parking Benefits
        </Link>
        <Link
          to='https://eform.gsd.state.nm.us/ebb_lifeinsurance.aspx'
          target='_blank'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-pen'></i>
          <br />I Wish to Enroll in Supplemental Term Life Only
        </Link>
        <Link
          to='/qualifying-event-state'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-pen'></i>
          <br />I am NOT a New Hire and have a Qualifying Event
        </Link>
        <Link
          to='https://www.mybenefitsnm.com/documents/Benefits_Eligibility_Acknowledgement_2022_v2.pdf'
          className='btn btn-primary quicklink'
          target='_blank'
        >
          <i className='bx bxs-file-pdf'></i>
          <br />
          New Hire Benefits Eligibility Acknowledgement
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

export default StateAgencyEmployees;
