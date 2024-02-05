import { Link } from "react-router-dom";
function AdministrativeLetters() {
  return (
    <>
      <div class='container'>
        <h1 class='my-4 mb-2 display-5 text-center'>
          Administrative Guide and Letters
        </h1>
      </div>
      <div class='container my-3 mx-auto'>
        <div class='side-by-side'>
          <div class='list-box'>
            <ul>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='documents/Administrative_Guide_2023_July_Final-edit-2.pdf'
                  target='_blank'
                >
                  Administrative Guide (Update July 2023)
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='documents/20210608094443318.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 21-001
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='documents/14-003_BenAdminltr_Addl_Administrative_Processes_for_LPBs_SIGNED.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 14-003
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='documents/14-002_BenAdminLtr_LPB_Premium_Load_changes_SIGNED.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 14-002
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='/documents/14-001_BenAdminltr_Admin_Changes_to_Disability_Program_SIGNED.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 14-001
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='/documents/13-004_BenAdminltr_LPB_Disability_Checks_Taxes_SIGNED.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 13-004
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='/Documents/13-003_BenAdminltr_COBRA_Billing_Changes_SIGNED.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 13-003
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='/documents/13-002_BenAdminltr_LPB_Selfpay_Billing_Changes_SIGNED.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 12-002
                </Link>
              </li>
              <li>
                <i class='bx bxs-file-pdf'></i>{" "}
                <Link
                  to='/documents/13-001_BenAdminltr_LPB_Separation_Process_SIGNED.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Benefits Administration Letter 12-001
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdministrativeLetters;
