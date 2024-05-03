import React from "react";
import { Link } from "react-router-dom";

function CarrierContacts() {
  return (
    <>
      <div className='container p-0 text-center'>
        <h1 className='my-4 ps-2 display-5'>
          STATE OF NEW MEXICO CARRIER CONTACT INFORMATION
        </h1>
      </div>
      <div className='container'>
        <table className='tableStyle table'>
          <tr>
            <th>CARRIER</th>
            <th>GROUP NUMBER</th>
            <th>CUSTOMER SERVICE PHONE NUMBER</th>
            <th>WEBSITE ADDRESS</th>
          </tr>
          <tr>
            <td>PRESBYTERIAN</td>
            <td style={{ textAlign: "center" }}>
              A0000034 (new) <br />
              GR002191 (old)
            </td>
            <td style={{ textAlign: "center" }}>1-888-275-7737</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://www.phs.org/health-plans/employer-plans/Pages/state-of-new-mexico.aspx'
                target='_blank'
                rel='noreferrer'
                className='linkStyle'
              >
                Presbyterian
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              BCBS-HMO
              <br />
              BCBS-PPO (Blue Preferred Plus)
            </td>
            <td style={{ textAlign: "center" }}>
              266002 (HMO)
              <br />
              268390 (PPO)
            </td>
            <td style={{ textAlign: "center" }}>1-877-994-2583</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://www.bcbsnm.com/sonm'
                target='_blank'
                className='linkStyle'
              >
                Blue Cross Blue Shield
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              Cigna-HMO (OAPIN)
              <br />
              Cigna-PPO (OAP)
            </td>
            <td style={{ textAlign: "center" }}>3343553</td>
            <td style={{ textAlign: "center" }}>1-800-244-6224</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://connections.cigna.com/newmexico/'
                target='_blank'
                className='linkStyle'
              >
                Cigna
              </Link>
            </td>
          </tr>
          <tr>
            <td>CVS CAREMARK</td>
            <td style={{ textAlign: "center" }}>RX22AR</td>
            <td style={{ textAlign: "center" }}>1-877-744-5313</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://www.caremark.com/'
                target='_blank'
                className='linkStyle'
              >
                CVS Caremark
              </Link>
            </td>
          </tr>
          <tr>
            <td>DELTA DENTAL</td>
            <td style={{ textAlign: "center" }}>8523</td>
            <td style={{ textAlign: "center" }}>1-877-395-9420</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='http://www.deltadentalnm.com/'
                target='_blank'
                className='linkStyle'
              >
                Delta Dental
              </Link>
            </td>
          </tr>
          <tr>
            <td>EyeMed</td>
            <td style={{ textAlign: "center" }}>
              State 1028738
              <br />
              LPB 1028739
            </td>
            <td style={{ textAlign: "center" }}>1-855-219-3138</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://member.eyemedvisioncare.com/sonm'
                target='_blank'
                className='linkStyle'
              >
                EyeMed
              </Link>
            </td>
          </tr>
          <tr>
            <td>The Hartford</td>
            <td style={{ textAlign: "center" }}>681601</td>
            <td style={{ textAlign: "center" }}>
              Accident/Critical Illness Claims: <br />
              1-866-547-4205 <br />
              Life Claims: <br />
              1-888-563-1124
            </td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://gateway.on24.com/wcc/experience/eliteHartfordFireInsuranceCom/2594735/3725682/State%2520of%2520New%2520Mexico%2520Risk%2520Management%2520Division'
                target='_blank'
                className='linkStyle'
              >
                The Hartford
              </Link>
            </td>
          </tr>
          <tr>
            <td>Disability</td>
            <td style={{ textAlign: "center" }}>N/A</td>
            <td style={{ textAlign: "center" }}>1-855-618-1800</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://www.mybenefitsnm.com/disability.html'
                target='_blank'
                className='linkStyle'
              >
                Disability
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              FLEXIBLE SPENDING (FSA)
              <br />
              Erisa Administrators (EASI)
            </td>
            <td style={{ textAlign: "center" }}>N/A</td>
            <td style={{ textAlign: "center" }}>1-855-618-1800</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://erisatrust.com/state-of-new-mexico/'
                target='_blank'
                className='linkStyle'
              >
                Erisa Trust Company
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              EMPOYEE ASSISTANCE GROUP (EAP)
              <br />
              Well-Being Solutions/ComPsych
            </td>
            <td style={{ textAlign: "center" }}>N/A</td>
            <td style={{ textAlign: "center" }}>1-833-515-0771</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://www.guidanceresources.com/groWeb/login/login.xhtml'
                target='_blank'
                className='linkStyle'
              >
                Employee Assistance Program (EAP)
              </Link>
            </td>
          </tr>
          <tr>
            <td>STAY WELL HEALTH CENTER – SANTA FE</td>
            <td style={{ textAlign: "center" }}>N/A</td>
            <td style={{ textAlign: "center" }}>505-570-4949</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to='https://healthcenters.proactive-md.com/state-of-new-mexico/stay-well-health-center-santa-fe/'
                target='_blank'
                className='linkStyle'
              >
                Stay Well Health Center
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default CarrierContacts;
