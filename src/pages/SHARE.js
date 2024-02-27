import { Link } from "react-router-dom";

// employeePortalSub3
function Share() {
  return (
    <>
      <div class='container p-0 text-center'>
        <h1 class='my-4 ps-2 display-5'>SHARE Self Service Manual</h1>
      </div>
      <div className='container portal-grid my-5'>
        <button
          href='#'
          data-bs-target='#shareManual'
          data-bs-toggle='modal'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-folder-plus'></i>
          <br />
          Employee SHARE Self-Service Manual
        </button>

        <Link
          to='https://hcm.share.state.nm.us/psp/hprd/EMPLOYEE/HRMS/?cmd=logout'
          className='btn btn-primary quicklink'
          target='_blank'
        >
          <i className='bx bxs-file-pdf'></i>
          <br />
          SHARE Portal Link
        </Link>
      </div>
      <div
        className='modal fade'
        id='shareManual'
        tabindex='-1'
        aria-labelledby='shareManualLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='shareManualLabel'>
                Employee SHARE Self-Service Manual
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <p>
                <a href='documents/Manage_Personal_Information_and_Review_Your_Benefits.pdf'>
                  Click here to view the manual
                </a>
              </p>
              <p>
                <u>Please note:</u>
              </p>
              <ul>
                <li>
                  <i className='bx bxs-star'></i> Your "Home" Street address is
                  required to be listed on one complete line. (Address is not to
                  bleed into the second line.)
                </li>
                <li>
                  <i className='bx bxs-star'></i> "Home" address should not be
                  incomplete or missing.
                </li>
                <li>
                  <i className='bx bxs-star'></i>
                  Do not use special characters in either the Name or "Home"
                  address, such as -, #, ~, etc.
                </li>
              </ul>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
