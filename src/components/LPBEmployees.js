import React from "react";

import ListBox from "./ListBox";

// this used to be the lpb ee grid on employeePortal.html
function LPBEmployees() {
  const lpbGeneralLinks = [
    {
      linkText: "I am a New Hire",
      url: "/lpb-employees",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "I have a Qualifying Event",
      url: "/qualifying-event-lpb",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "Benefits Information",
      url: "/benefits-info",
      iconClass: "bx-link-alt",
    },
    // {
    //   linkText: "SHARE Self Service Manual",
    //   url: "/share",
    //   iconClass: "bx-link-alt",
    // },
    {
      linkText: "Special Rules: LWOP, FMLA and More",
      url: "/admin-letters",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "POP Waiver Form (LPB)",
      url: "/documents/POP-LPB-NOTICE-OF-WAIVER-2023.pdf",
      iconClass: "bxs-file-pdf",
    },
  ];

  const lpbFormsDocs = [
    {
      linkText: "Affidavit of Domestic Partnership",
      url: "/documents/Affidavit_Domestic_Partner_092223.pdf",
      iconClass: "bxs-file-pdf",
    },
    {
      linkText: "Termination of Domestic Partnership",
      url: "/documents/Domestic_Partnership_Termination_092223.pdf",
      iconClass: "bxs-file-pdf",
    },
  ];

  const lpbNewHireQEInfo = [
    {
      linkText: "New Hire Orientation Presentation (pdf) - English",
      url: "/movies/Presentation_Recording_2021-12-30-14-EKR-REsp.mp4",
      iconClass: "bxs-file-pdf",
    },
  ];
  return (
    <div className='container mx-auto my-5' id='LPB-ee-grid'>
      <div className='side-by-side'>
        <ListBox title={"General Information"} links={lpbGeneralLinks} />

        <ListBox
          title={"New Hire & Qualifying Event Orientation"}
          links={lpbNewHireQEInfo}
        />
        <ListBox title={"Domestic Partnership Forms"} links={lpbFormsDocs} />
      </div>
    </div>
  );
}

export default LPBEmployees;
