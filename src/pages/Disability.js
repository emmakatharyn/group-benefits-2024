import React from "react";
import { Link } from "react-router-dom";

function Disability() {
  return (
    <div className='container my-4'>
      <div className='d-flex align-items-center'>
        <img src='images/2019open.jpg' alt='sonm logo' width={200} />
        <h1 className='my-4 display-5'>
          State of New Mexico Disability Policy
        </h1>
      </div>
      <div className='container my-5 mx-auto'>
        <p>
          The State of New Mexico Disability Policy is a self-insured plan which
          was created to provide financial assistance to those that are unable
          to work for a period of time and lose income due to a sickness or
          injury (if not receiving Workers Compensation). This Disability Plan
          is not available to dependents. Participation in this Plan is
          voluntary. The premium is 100% paid by the employee after-tax.
        </p>
        <p className='text-danger'>
          The State of New Mexico Disability Program is available exclusively
          for eligible State employees and participating Local Public Body
          employees in the State of New Mexico Group Health Plan. If you are not
          sure you qualify, please speak with your human resources contact to
          find out.
        </p>
      </div>
      <div className='side-by-side'>
        <div className='container card-container'>
          <h1>How do I become eligible for disability benefits?</h1>
          <p>
            Employees who participate in the State of New Mexico Group Health
            Plan may choose to enroll in Disability Coverage at any time. The
            employee pays 100% of the monthly premium and must have paid 12
            consecutive months of premiums prior to the date of disability. For
            more information on the Disability benefit, please see the Policy
            Guide.
          </p>
        </div>
        <div className='list-box'>
          <h4 className='my-3 py-3'>POLICY MANUAL AND FORMS</h4>
          <ul>
            <li>
              <Link to='/documents/disability-policy-01.15.2020-Fillable-Forms.pdf'>
                Disability Policy
              </Link>
            </li>
            <li>
              <Link to='/documents/acknowledgements_formsfillable.pdf'>
                Disability Claim Form
              </Link>
            </li>
            <li>
              <Link to='/documents/physician_form_10_2019_fillable.pdf'>
                Physician Form
              </Link>
            </li>
          </ul>
          <h4>HR TRAINING MATERIALS</h4>
          <ul>
            <li>
              <Link to='/documents/disability%20Overview%209-19.pdf'>
                Disability Overview
              </Link>
            </li>
            <li>
              <Link to='/documents/disability%20Overview%209-19.pdf'>
                Disability FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className='contact-info'>
          <h4 className='my-3 py-3'>DISABILITY CONTACT INFORMATION:</h4>
          <img
            className='mb-3'
            src='images/EASI_logo.jpg'
            alt='EASI logo'
            width={200}
          />
          <p>
            <b>ERISA ADMINISTRATIVE SERVICES</b>:
          </p>
          <p>Phone: 1-855-618-1800 (press 1)</p>
          <p>Fax: 505-705-3311</p>
          <p>Email: SONM@easitpa.com</p>
          <p>Mailing address:</p>
          <p>EASI (Erisa Administrative Services, Inc.)</p>
          <p>Attn: Disability</p>
          <p>1200 San Pedro Dr NE</p>
          <p>Albuquerque, NM 87110</p>
        </div>
      </div>
    </div>
  );
}

export default Disability;
