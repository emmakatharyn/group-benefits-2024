import ListBox from "./ListBox";

// this is what used to be the state ee grid on employeePortal.html
function StateEmployees() {
  const saeGeneralLinks = [
    { linkText: "I am a New Hire", url: "/state-agency-employees" },
    { linkText: "I have a Qualifying Event", url: "/qualifying-event-state" },
    { linkText: "Benefits Information", url: "/benefits-info" },
    { linkText: "SHARE Self Service Manual", url: "/share" },
    { linkText: "Special Rules: LWOP, FMLA and More", url: "/admin-letters" },
  ];

  const saeFormsDocs = [
    {
      linkText: "Affidavit of Domestic Partnership",
      url: "/documents/Affidavit_Domestic_Partner_092223.pdf",
    },
    {
      linkText: "Termination of Domestic Partnership",
      url: "/documents/Domestic_Partnership_Termination_092223.pdf",
    },
    {
      linkText: "POP Waiver Form (State)",
      url: "/documents/Aetna_Network_Flyer_proof_2.pdf",
    },
    // {linkText:"", url:""},
  ];

  const saeNewHireQEInfo = [
    {
      linkText: "New Hire Orientation Presentation (pdf) - English",
      url: "/documents/New-Employee-QE-Orientation-Final-3-28-23-English-slides.pdf",
    },
    {
      linkText: "New Hire Orientation Presentation (mp4) - English",
      url: "/movies/New-Hire-and-Qualifying-Event-Orientation-2023.mp4",
    },
    {
      linkText: "New Hire Orientation Presentation (mp4) - Spanish",
      url: "/movies/New-Hire-and-Qualifying-Event-Orientation-Spanish-2023.mp4",
    },
  ];
  return (
    <div className='container portal-grid mx-auto my-5' id='state-ee-grid'>
      <ListBox title={"General Information"} links={saeGeneralLinks} />
      <ListBox title={"Forms and Documents"} links={saeFormsDocs} />
      <ListBox
        title={"New Hire & Qualifying Event Orientation"}
        links={saeNewHireQEInfo}
      />
    </div>
  );
}

export default StateEmployees;
