import ListBox from "./ListBox";

// this is what used to be the state ee grid on employeePortal.html
function StateEmployees() {
  const saeGeneralLinks = [
    {
      linkText: "I am a New Hire",
      url: "/state-agency-employees",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "I have a Qualifying Event",
      url: "/qualifying-event-state",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "Benefits Information",
      url: "/benefits-info",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "SHARE Self Service Manual",
      url: "/share",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "Special Rules: LWOP, FMLA and More",
      url: "/admin-letters",
      iconClass: "bx-link-alt",
    },
    {
      linkText: "POP Waiver Form (State)",
      url: "/documents/Aetna_Network_Flyer_proof_2.pdf",
      iconClass: "bxs-file-pdf",
    },
  ];

  const saeFormsDocs = [
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

    // {linkText:"", url:""},
  ];

  const saeNewHireQEInfo = [
    {
      linkText: "New Hire Orientation Presentation (pdf) - English",
      url: "/documents/New-Employee-QE-Orientation-Final-3-28-23-English-slides.pdf",
      iconClass: "bxs-file-pdf",
    },
    {
      linkText: "New Hire Orientation Presentation (mp4) - English",
      url: "/movies/New-Hire-and-Qualifying-Event-Orientation-2023.mp4",
      iconClass: "bxs-movie-play",
    },
    {
      linkText: "New Hire Orientation Presentation (mp4) - Spanish",
      url: "/movies/New-Hire-and-Qualifying-Event-Orientation-Spanish-2023.mp4",
      iconClass: "bxs-movie-play",
    },
  ];
  return (
    <div className='container mx-auto my-5' id='state-ee-grid'>
      <div className='side-by-side'>
        <ListBox title={"General Information"} links={saeGeneralLinks} />
        <ListBox
          title={"New Hire & Qualifying Event Orientation"}
          links={saeNewHireQEInfo}
        />
        <ListBox title={"Domestic Partnership Forms"} links={saeFormsDocs} />
      </div>
    </div>
  );
}

export default StateEmployees;
