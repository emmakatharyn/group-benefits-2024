import React from "react";

function POPwaivers() {
  return (
    <>
      <div className='container p-0'>
        <h1 className='my-4 ps-2 display-5'>
          Premium Only Plan (POP) Waiver Forms
        </h1>
        <p>
          <strong>STATE EMPLOYEES</strong>: POP Pre-tax premium deductions are
          automatic. Waiver form must be completed and faxed to Erisa at (505)
          244-6009 the same day that you submit your online enrollment/change
          form if you want post-tax deductions.
        </p>
        <p>
          <strong>LPB EMPLOYEES</strong>: POP pre-tax premium deductions are
          automatic. Waiver form must be completed and submitted to your
          employer if you want post-tax deductions
        </p>
        <p>
          <strong>LEGISLATORS</strong>: Please note that Legislators are not
          eligible for POP
        </p>
      </div>
      <div className='container portal-grid my-5'>
        <a
          href='documents/POP-SoNM-NOTICE-OF-WAIVER-2023.pdf'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-file-pdf'></i>
          POP Waiver Form (State Employee)
        </a>

        <a
          href='documents/POP-LPB-NOTICE-OF-WAIVER-2023.pdf'
          className='btn btn-primary quicklink'
        >
          <i className='bx bxs-file-pdf'></i>
          POP Waiver Form (LPB Employee)
        </a>
      </div>
    </>
  );
}

export default POPwaivers;
