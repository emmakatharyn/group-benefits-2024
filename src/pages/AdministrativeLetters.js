import { Link } from "react-router-dom";
const adminLetters = [
  {
    displayText: "Administrative Guide (Update July 2023)",
    path: "/documents/Administrative_Guide_2023_July_Final-edit-2.pdf",
  },
  {
    displayText: "Benefits Administration Letter 21-001",
    path: "/documents/20210608094443318.pdf",
  },
  {
    displayText: "Benefits Administration Letter 14-003",
    path: "/documents/14-003_BenAdminltr_Addl_Administrative_Processes_for_LPBs_SIGNED.pdf",
  },
  {
    displayText: "Benefits Administration Letter 14-002",
    path: "/Documents/14-002_BenAdminLtr_LPB_Premium_Load_changes_SIGNED.PDF",
  },
  {
    displayText: "Benefits Administration Letter 14-001",
    path: "/Documents/14-001_BenAdminltr_Admin_Changes_to_Disability_Program_SIGNED.PDF",
  },
  {
    displayText: "Benefits Administration Letter 13-004",
    path: "/Documents/13-004_BenAdminltr_LPB_Disability_Checks_Taxes_SIGNED.PDF",
  },
  {
    displayText: "Benefits Administration Letter 13-003",
    path: "/Documents/13-003_BenAdminltr_COBRA_Billing_Changes_SIGNED.PDF",
  },
  {
    displayText: "Benefits Administration Letter 12-002",
    path: "/Documents/13-002_BenAdminltr_LPB_Selfpay_Billing_Changes_SIGNED.PDF",
  },
  {
    displayText: "Benefits Administration Letter 12-001",
    path: "/Documents/13-001_BenAdminltr_LPB_Separation_Process_SIGNED.PDF",
  },
];
function AdministrativeLetters() {
  return (
    <>
      <div className='container'>
        <h1 className='my-5 display-5 text-center'>
          Administrative Guide and Letters
        </h1>
      </div>
      <div className='container my-3 mx-auto'>
        <div className='side-by-side justify-content-center'>
          <div className='list-box'>
            <ul>
              {adminLetters.map((item) => {
                return (
                  <li>
                    <i className='bx bxs-file-pdf'></i>
                    <Link to={item.path} target='_blank'>
                      {item.displayText}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdministrativeLetters;
