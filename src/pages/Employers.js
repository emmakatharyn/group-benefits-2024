import { Link } from "react-router-dom";
const policiesDocsFormsList = [
  {
    displayText: "Administrative Guide",
    path: "/documents/Administrative_Guide_2023_July_Final-edit-2.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "Administrative Letters",
    path: "/admin-letters",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Benefits Eligibility Acknowledgement Form (English)",
    path: "/documents/Benefits_Eligibility_Acknowledgement_2023.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "Benefits Eligibility Acknowledgement Form (Espa\u00f1ol)",
    path: "/documents/Benefits_Eligibility_Acknowledgement_2023_Spanish.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "Benefits Eligibility Acknowledgement Form - Waiving Benefits",
    path: "/documents/Benefits_Eligibility_Acknowledgement_2023_Waiving_All_Benefits.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText:
      "Benefits Eligibility Acknowledgement Form - Waiving Benefits (Espa\u00f1ol)",
    path: "/documents/Benefits_Eligibility_Acknowledgement_2023_Waiving_All_Benefits_Spanish.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "COBRA Notification to Term Benefits",
    path: "/Documents/COBRA_Notification_Form-Revised_6-8-2021.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "RMD Current Year Refund Request (Employee)",
    path: "/documents/RMD_Current_Year_Refund_Request_Employee_Revised_2021.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "RMD Current Year Refund Request (Employer)",
    path: "/documents/RMD_Current_Year_Refund_Request_ER-financial_Agency_(1)_(002).pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "Death Claim Form",
    path: "/documents/State_of_New_Mexico_Life_Claim_Form.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "DFA Summary Page (Download)",
    path: "/documents/DFA-Summary_Page_2020.xls",
    iconClass: "bx bxs-file-doc",
  },
  {
    displayText: "Disability Policy",
    path: "/disability",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Disability Calculation Sheet (Download)",
    path: "/documents/Disability Calculation Sheet-Final.xlsx",
    iconClass: "bx bxs-file-doc",
  },
  {
    displayText: "Domestic Partnership Forms",
    path: "/domestic-partnership",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Employee Enrollment Resources",
    path: "/employees",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "LWOP Benefit Premium Transmittal Form",
    path: "/premiums-due",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText:
      "Notification to Terminate Benefits Due to Non-Payment of Premiums",
    path: "/documents/Notification_to_Term_Benefits_July2022.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "POP Waiver Form (State)",
    path: "/Documents/POP-SoNM-NOTICE-OF-WAIVER-2023.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "PREMIUM RATE SHEETS – STATE",
    path: "/SAE-premium-rates",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "RMD Prior Calendar Year Refund Request Form (Employee)",
    path: "/Documents/RMD_Prior_Year_Refund_Request_Employee_Revised_2021.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "RMD Prior Calendar Year Refund Request Form (Agency)",
    path: "/Documents/RMD_Prior_Year_Refund_Request_ER-financial_Agency_2.6.2020.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "W-9 Form Instructions",
    path: "/documents/W-9_Example.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "W-9 New Form",
    path: "/documents/W-9_New_Form.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  { displayText: "", path: "", iconClass: "" },
  { displayText: "", path: "", iconClass: "" },
  { displayText: "", path: "", iconClass: "" },
  { displayText: "", path: "", iconClass: "" },
];
const noticesResInfoList = [
  {
    displayText: "Benefits Comparison Guide 2021",
    path: "/Documents/Benefit_Comparison_Grid-FY21_Final(003).pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "Benefits Comparison Guide 2022",
    path: "/Documents/Benefit_Comparison_Grid_FY22_Final_v2.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "Benefits Information",
    path: "/benefits-info",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Benefit Plan Contacts",
    path: "./CarrierContacts.html",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Benefits Premium Calculator",
    path: "./ViewPremiumCal.html",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "COBRA Resources Page",
    path: "./COBRA.html",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Disability Resources Page",
    path: "/disability",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Federal Medicare Part D Creditable Coverage Notices",
    path: "./FGPOpenFPN.html",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "HIPAA Privacy Notice",
    path: "/Documents/HIPAA_Privacy_Notice.PDF",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "HR Meetings and Recordings",
    path: "./HRresources.html",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Newsletter Archive",
    path: "./news.html",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "SHARE Self Service Instruction Guide",
    path: "/share",
    iconClass: "bx bx-link-alt",
  },
  {
    displayText: "Trifold Benefits Brochure",
    path: "/documents/Emply_Trifold_6_28_7_18.pdf",
    iconClass: "bx bxs-file-pdf",
  },
];
const lpbFormsList = [
  {
    displayText: "LPB Employee Change/Correction Form",
    path: "/documents/LPB_Change_Form.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "POP Waiver Form (LPB)",
    path: "/documents/POP-LPB-NOTICE-OF-WAIVER-2023.pdf",
    iconClass: "bx bxs-file-pdf",
  },
  {
    displayText: "Premium Rate Sheets - LPB",
    path: "./rmdPremiumRates.html",
    iconClass: "bx bx-link-alt",
  },
];
function Employers() {
  return (
    <>
      <div class='container'>
        <h1 class='my-4 mb-2 display-5 text-center'>
          Employer Information Resources
        </h1>
      </div>
      <div class='container my-3 mx-auto'>
        <div class='side-by-side'>
          <div class='list-box'>
            <h4 class='my-2 py-2'>POLICIES, DOCUMENTS AND FORMS</h4>
            <hr />
            <ul>
              {policiesDocsFormsList.map((item) => {
                return (
                  <li>
                    <i className={item.iconClass}></i>
                    <Link to={item.path} target='_blank'>
                      {item.displayText}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class='list-box'>
            <h4 class='my-2 py-2'>NOTICES, RESOURCES AND INFORMATION</h4>
            <hr />
            <ul>
              {noticesResInfoList.map((item) => {
                return (
                  <li>
                    <i className={item.iconClass}></i>
                    <Link to={item.path} target='_blank'>
                      {item.displayText}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class='list-box'>
            <h4 class='my-2 py-2'>LPB FORMS</h4>
            <hr />
            <ul>
              {lpbFormsList.map((item) => {
                return (
                  <li>
                    <i className={item.iconClass}></i>
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

export default Employers;
