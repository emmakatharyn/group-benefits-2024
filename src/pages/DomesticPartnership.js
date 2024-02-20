// this goes with what used to be EmployerResourcesSub1.html
import { Link } from "react-router-dom";

function DomesticPartnership() {
  return (
    <div className='container portal-grid my-5'>
      <Link
        to='/documents/Affidavit_Domestic_Partner_092223.pdf'
        class='btn btn-primary quicklink'
      >
        <i class='bx bxs-file-pdf'></i>
        <br />
        Affidavit of Domestic Partnership
      </Link>
      <Link
        to='/documents/Domestic_Partnership_Termination_092223.pdf'
        class='btn btn-primary quicklink'
      >
        <i class='bx bxs-file-pdf'></i>
        <br />
        Termination of Domestic Partnership
      </Link>
    </div>
  );
}

export default DomesticPartnership;
