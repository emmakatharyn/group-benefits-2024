import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import carriers from "./carriers";
// import { Link } from "react-router-dom";

function CarriersInfoGrid() {
  const [show, setShow] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (carrier) => {
    setSelectedCarrier(carrier);
    setShow(true);
  };

  const renderCategory = (categoryName, categoryData) => {
    return (
      <>
        <h4>{categoryName}</h4>
        <ul>
          {categoryData.map((item, index) => (
            <li key={index}>
              <i className={`bx ${item.iconClass}`}></i>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                {item.linkName}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className='container p-0'>
        <h1 className='my-5 display-5 text-center'>Benefits Information</h1>
      </div>
      <div className='row justify-content-center gap-2 my-4 mt-5'>
        {carriers.map((carrier, index) => (
          <div className='col-sm-4 col-md-3 mb-3 mb-sm-0' key={carrier.modalID}>
            <div className='card text-center'>
              {/* <Link
                to={carrier.webAddress}
                target='_blank'
                className='d-flex align-items-center'
              > */}
              <img
                src={carrier.imgURL}
                className='card-img-top p-2 mx-auto'
                alt={`${carrier.carrierName} logo`}
                style={{
                  width: "75%",
                  marginTop: "12px",
                  maxHeight: "152px",
                }}
              />
              {/* </Link> */}
              <div className='card-body'>
                <h5 className='card-title'>{carrier.carrierName}</h5>

                <Button variant='light' onClick={() => handleShow(carrier)}>
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal size='lg' show={show} onHide={handleClose} fullscreen='md-down'>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCarrier?.carrierName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCarrier && (
            <>
              {Object.entries(selectedCarrier.content).map(
                ([category, data]) => (
                  <div key={category}>{renderCategory(category, data)}</div>
                )
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CarriersInfoGrid;
