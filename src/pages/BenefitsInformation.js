import carriers from "./carriers";

function BenefitsInformation() {
  const carrierTiles = carriers.map((carrier) => {
    console.log(carrier.carrierName);
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
              class='btn btn-light'
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
          {carrierTiles}
        </div>
      </div>
    </div>
  );
}

export default BenefitsInformation;
