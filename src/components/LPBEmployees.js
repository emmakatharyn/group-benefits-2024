import ListBox from "./ListBox";

// this used to be the lpb ee grid on employeePortal.html
function LPBEmployees() {
  const lpbGeneralLinks = [
    { linkText: "I am a New Hire", url: "/lpb-employees" },
    { linkText: "I have a Qualifying Event", url: "/qualifying-event-lpb" },
    { linkText: "Benefits Information", url: "/benefits-info" },
    { linkText: "SHARE Self Service Manual", url: "/share" },
    { linkText: "Special Rules: LWOP, FMLA and More", url: "/admin-letters" },
  ];

  const lpbFormsDocs = [
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
  ];

  const lpbNewHireQEInfo = [
    {
      linkText: "New Hire Orientation Presentation (pdf) - English",
      url: "/movies/Presentation_Recording_2021-12-30-14-EKR-REsp.mp4",
    },
  ];
  return (
    <div class='container portal-grid mx-auto my-5' id='LPB-ee-grid'>
      <ListBox title={"General Information"} links={lpbGeneralLinks} />
      <ListBox title={"Forms and Documents"} links={lpbFormsDocs} />
      <ListBox
        title={"New Hire & Qualifying Event Orientation"}
        links={lpbNewHireQEInfo}
      />
    </div>
  );
}

export default LPBEmployees;
