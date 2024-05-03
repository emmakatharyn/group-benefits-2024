
import React from "react";
import { Link } from "react-router-dom";

function BenefitsInformation() {
  const carriers = [
    {
      carrierName: "Employee Benefits Bureau",
      imgURL: "/images/2019open.jpg",
      webAddress: "https://www.mybenefitsnm.com/",
      modalID: "employeeBenefitsBureau",
      openEnrollment: [
        {
          linkName: "Employee Benefits Bureau Open Enrollment Presentation",
          url: "/documents/2023_2024_Open_Enrollment_Materials/1_EBB_2024_Open_Enrollment.pdf",
        },
        {
          linkName: "This is the Second OE Link",
          url: "https://nmpsia.com/",
        },
        {
          linkName: "This is the Third OE Link",
          url: "documents/.pdf",
        },
      ],
      generalInfo: [
        {
          linkName: "This is the First GeneralInfo Link",
          url: "https://google.com/",
        },
        {
          linkName: "This is the Second GeneralInfo Link",
          url: "https://nmpsia.com/",
        },
        {
          linkName: "This is the Third GeneralInfo Link",
          url: "documents/.pdf",
        },
      ],
      presentationsRec: [
        {
          linkName: "Presentation PDF Slideshow",
          url: "/documents/something.pdf",
        },
        {
          linkName: "Presentation MP4 Recording",
          url: "movies/something.mp4",
        },
      ],
    },
    {
      carrierName: "Presbyterian Health Services",
      imgURL: "/images/2019open.jpg",
      webAddress: "https://www.mybenefitsnm.com/",
      modalID: "employeeBenefitsBureau",
      openEnrollment: [
        {
          linkName: "Employee Benefits Bureau Open Enrollment Presentation",
          url: "/documents/2023_2024_Open_Enrollment_Materials/1_EBB_2024_Open_Enrollment.pdf",
        },
        {
          linkName: "This is the Second OE Link",
          url: "https://nmpsia.com/",
        },
        {
          linkName: "This is the Third OE Link",
          url: "documents/.pdf",
        },
      ],
      generalInfo: [
        {
          linkName: "This is the First GeneralInfo Link",
          url: "https://google.com/",
        },
        {
          linkName: "This is the Second GeneralInfo Link",
          url: "https://nmpsia.com/",
        },
        {
          linkName: "This is the Third GeneralInfo Link",
          url: "documents/.pdf",
        },
      ],
      presentationsRec: [
        {
          linkName: "Presentation PDF Slideshow",
          url: "/documents/something.pdf",
        },
        {
          linkName: "Presentation MP4 Recording",
          url: "movies/something.mp4",
        },
      ],
    },
  ];

  const carriersGrid = carriers.map((carrier) => {
    return (
      <div className='col-sm-4 col-md-3 mb-3 mb-sm-0' key={carrier.modalID}>
        <div className='card text-center'>
          <img
            src={carrier.imgURL}
            className='card-img-top p-2 mx-auto'
            alt={`${carrier.carrierName} logo`}
            style={{ width: "160px" }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{carrier.carrierName}</h5>

            <button
              type='button'
              className='btn btn-light'
              data-bs-toggle='modal'
              data-bs-target={`#${carrier.modalID}`}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='container p-0'>
        <h1 className='my-4 display-5 text-center'>Benefits Information</h1>
      </div>
      <div className='container mb-4 px-0 mt-5' id='carrierPresentations'>
        <div className='row gy-4'>
          {/* Employee Benefits Bureau */}
          {carriersGrid}
          {/* Presbyterian Health Services */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link
                to={
                  "https://www.phs.org/health-plans/employer-plans/state-of-new-mexico"
                }
              >
                <img
                  src='/images/Presbyterian.png'
                  className='card-img-top p-2 mt-4'
                  alt='Presbyterian Health Services logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Presbyterian Health Services</h5>

                <button
                  type='button'
                  className='btn btn-light'
                  data-bs-toggle='modal'
                  data-bs-target='#presbyterianHealthServices'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Blue Cross Blue Shield NM */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='https://www.bcbsnm.com/sonm'>
                <img
                  src='https://www.bcbsnm.com/content/dam/bcbs/retail/images/logo/large-header-logo_nm.png'
                  className='card-img-top p-2 mt-5 px-3'
                  alt='Blue Cross Blue Shield NM logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Blue Cross Blue Shield NM</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#bcbsNM'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Cigna Health Open Enrollment */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link
                to='https://connections.cigna.com/newmexico/'
                target='_blank'
              >
                <img
                  src='/images/New_Cigna Logo_2023.PNG'
                  className='card-img-top p-2 mt-2 px-3'
                  alt='Cigna Health logo'
                  style={{ maxHeight: "120px" }}
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Cigna Health</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#cignaHealth'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* CVS Caremark Pharmaceutical */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='https://www.caremark.com/' target='_blank'>
                <img
                  src='/images/CVSCaremarkLogoRed.png'
                  className='card-img-top p-2 mt-5 px-3'
                  alt='CVS Caremark logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>CVS Caremark Pharmaceutical</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#cvsHealth'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Employee Assistance Program */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <img
                src='/images/wellbeingsolution.jpg'
                className='card-img-top p-2'
                alt='Employee Assistance Program logo'
              />
              <div className='card-body'>
                <h5 className='card-title'>Employee Assistance Program</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#employeeAssistanceProgram'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Delta Dental */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='https://www.deltadentalnm.com/' target='_blank'>
                <img
                  src='/images/DeltaDendal.png'
                  className='card-img-top p-2 mt-5 px-3'
                  alt='Delta Dental logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Delta Dental</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#deltaDental'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* EyeMed Vision Open Enrollment */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link
                to='https://member.eyemedvisioncare.com/sonm/en'
                target='_blank'
              >
                <img
                  src='/images/EYEMED_logo-green-grey.jpg'
                  className='card-img-top p-2 mt-5 px-3 mx-auto'
                  alt='EyeMed Vision logo'
                  style={{ width: "180px" }}
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>EyeMed Vision</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#eyeMed'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          {/* The Hartford Open Enrollment */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link
                to='https://gateway.on24.com/wcc/experience/eliteHartfordFireInsuranceCom/2594735/3725682/State%2520of%2520New%2520Mexico%2520Risk%2520Management%2520Division'
                target='_blank'
              >
                <img
                  src='/images/hartfordlogo.png'
                  className='card-img-top p-2 mt-2 px-3 mx-auto'
                  alt='The Hartford logo'
                  style={{ width: "180px" }}
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>The Hartford</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#theHartford'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Flexible Spending Account (FSA) */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='fsa.html' target='_blank'>
                <img
                  src='/images/tree.png'
                  className='card-img-top p-2 mx-auto mt-2'
                  alt='FSA Erisa Trust logo'
                  style={{ width: "140px" }}
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Flexible Spending Account (FSA)</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#fsaOEPresentations'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          {/* Virta Health tile */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link
                href='https://www.virtahealth.com/join/sonm'
                target='_blank'
              >
                <img
                  src='/images/virta_pres_bcbs_logo.png'
                  className='card-img-top p-2 mt-4'
                  alt='Vita logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>
                  Virta Health
                  <br />
                  (PHP and BCBS)
                </h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#virtaModal'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Omada */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='https://go.omadahealth.com/sonm' target='_blank'>
                <img
                  src='/images/omada_cigna_logo.jpg'
                  className='card-img-top p-2 mt-4 px-3 mx-auto'
                  alt='Omada logo'
                  style={{ width: "260px" }}
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Omada Health (Cigna)</h5>
                <button
                  to='#'
                  data-bs-toggle='modal'
                  data-bs-target='#omadaModal'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Voluntary Benefits */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link href='volben.html' target='_blank'>
                <img
                  src='/images/2019open.jpg'
                  className='card-img-top p-2 mt-4 px-3 mx-auto'
                  alt='SONM seal'
                  style={{ height: "160px" }}
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Voluntary Benefits</h5>
                <Link to='volben.html' className='btn btn-light'>
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Wondr */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link
                to='https://enroll.wondrhealth.com/start?s=SONM'
                target='_blank'
              >
                <img
                  src='images/Wondr_Logo_cropped.png'
                  className='card-img-top p-2 mt-4'
                  alt='Wondr logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Wondr Health Program (BCBS)</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#wondrProgram'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Hinge */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='https://hinge.health/stateofnewmexico' target='_blank'>
                <img
                  src='images/Hinge_Health_logo.png'
                  className='card-img-top p-2 mt-4'
                  alt='Hinge logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Hinge Health Program (BCBS)</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#hingeHealth'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Disability */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='Disability.html' target='_blank'>
                <img
                  src='images/easi.png'
                  className='card-img-top p-2'
                  alt='EASI logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Disability Benefits</h5>
                <Link to='Disability.html' className='btn btn-light'>
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* catapult */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link to='https://www.catapulthealth.com/' target='_blank'>
                <img
                  src='/images/catapult.jpg'
                  className='card-img-top p-2 mt-5 px-3 mx-auto'
                  alt='Catapult health'
                  style={{ height: "90px" }}
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Catapult Health (BCBS)</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#catapult'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* SWORD */}
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0'>
            <div className='card text-center'>
              <Link
                to='https://meet.swordhealth.com/sonm?utm_source=n_a_sword&utm_medium=print&utm_campaign=offline_n_a&utm_content=posterflyer'
                target='_blank'
              >
                <img
                  src='images/01_SwordLogo_digital_preferred_red_blue.png'
                  className='card-img-top p-2 mt-4'
                  alt='sword logo'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>Sword Pain Management (PHP)</h5>
                <button
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#swordHealth'
                  className='btn btn-light'
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsInformation;
