import { Link } from "react-router-dom";

function LPBEmployees() {
  return (
    <div class='container portal-grid my-5' id='LPB-ee-grid'>
      <Link to='LocalPublicBodyEmployee.html' class='btn btn-primary quicklink'>
        <i class='bx bxs-folder-plus'></i>
        <br />I am a New Hire
      </Link>

      <Link to='/qualifying-event-lpb' class='btn btn-primary quicklink'>
        <i class='bx bxs-calendar-exclamation'></i>
        <br />I have a Qualifying Event
      </Link>

      <Link
        to='/movies/Presentation_Recording_2021-12-30-14-EKR-REsp.mp4'
        class='btn btn-primary quicklink'
      >
        <i class='bx bxs-info-circle'></i>
        <br />
        New Hire & Qualifying Event Orientation
      </Link>

      <Link to='/benefits-info' class='btn btn-primary quicklink'>
        <i class='bx bxs-file-doc'></i>
        <br />
        Benefits Information
      </Link>

      <Link to='/share' class='btn btn-primary quicklink'>
        <i class='bx bx-book-open'></i>
        <br />
        SHARE Self Service Manual
      </Link>
      <Link to='/admin-letters' class='btn btn-primary quicklink'>
        <i class='bx bxs-star'></i>
        <br />
        Special Rules: LWOP, FMLA and More
      </Link>
      <Link to='/domestic-partnership' class='btn btn-primary quicklink'>
        <i class='bx bxs-file-pdf'></i>
        <br />
        Domestic Partnership Forms
      </Link>
      <Link
        to='/documents/POP-SoNM-NOTICE-OF-WAIVER-2023.pdf'
        class='btn btn-primary quicklink'
        target='_blank'
      >
        <i class='bx bxs-pen'></i>
        <br />
        POP Waiver Form (LPB)
      </Link>
    </div>
  );
}

export default LPBEmployees;
