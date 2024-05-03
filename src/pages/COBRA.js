import React from "react";
import { Link } from "react-router-dom";

function COBRA() {
  return (
    <>
      <div className='container p-0 text-center'>
        <h1 className='my-4 ps-2 display-5'>COBRA Information</h1>
      </div>
      <div className='container my-5' id='adminLetters'>
        <ul>
          <li>
            <i className='bx bxs-file-pdf'></i>
            <Link
              to='/documents/COBRA-Premium-Rate-Sheet-STATE-Only-0-Load-2023-07-01-to-2024-06-30-MASTER.pdf'
              target='_blank'
            >
              COBRA State Employee Rates Only Effective July 1, 2023 through
              June 30, 2024
            </Link>
          </li>
          <li>
            <i className='bx bxs-file-pdf'></i>
            <Link
              to='/documents/SONM-Cobra-Rates-effective-1-1-2021-6-30-2024.pdf'
              target='_blank'
            >
              COBRA Rates Effective July 2023 through June 2024
            </Link>
          </li>
          <li>
            <i className='bx bxs-file-pdf'></i>
            <Link
              to='/documents/COBRA_Form_Notice_of_Rights_to_Continue_Coverage.pdf'
              target='_blank'
            >
              COBRA Initial Notice for New Hires
            </Link>
          </li>
          <li>
            <i className='bx bxs-file-pdf'></i>
            <Link
              to='/documents/COBRA_Notification_Form-Revised_6-8-2021.pdf'
              target='_blank'
            >
              COBRA Notification Form
            </Link>
          </li>
          <li>
            <i className='bx bxs-file-pdf'></i>
            <Link
              to='/Documents/Premium_Rate_Sheet_COBRA_Only_0_Load_2022_07_01_to_2023_06_30_MASTER.pdf'
              target='_blank'
            >
              COBRA Rates Effective through June 30, 2023
            </Link>
          </li>
          <li>
            <i className='bx bxs-file-pdf'></i>
            <Link to='/documents/faq_consumer_cobra.pdf' target='_blank'>
              COBRA Frequently Asked Questions
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default COBRA;
