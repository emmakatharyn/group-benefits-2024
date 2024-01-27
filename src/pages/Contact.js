import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className='py-3 my-4'>
      <Link
        to='carrierContacts'
        className='centered-link text-center my-4 mb-4'
      >
        CARRIER PLAN CONTACTS
      </Link>
      <div className='container d-flex gap-3 pt-4'>
        <div className='contact-box'>
          <h6>Location</h6>
          <p>
            Erisa Administrative Services, Inc. Office
            <br />
            1200 San Pedro Drive NE <br />
            Albuquerque, NM 87110
          </p>
        </div>
        <div className='contact-box'>
          <h6>Phone</h6>
          <p>
            Albuquerque: (505) 244-6000
            <br />
            Toll Free: (855) 618-1800 <br />
            Fax: (505) 244-6009
          </p>
        </div>
        <div className='contact-box'>
          <h6>Email</h6>
          <p>
            <a href='mailto:SONM@easitpa.com'>SONM@easitpa.com</a>
            <br />
            <a href='mailto:FSA@easitpa.com'>FSA@easitpa.com</a>
          </p>
        </div>
        <div className='contact-box'>
          <h6>Business Hours</h6>
          <p>
            Monday - Friday: 8:00 AM - 5:00 PM
            <br />
            Saturday - Sunday: Closed <br />
            Erisa is closed for New Year Martin Luther King Day, Memorial Day
            Independence Day, Labor Day Thanksgiving (two days) and Christmas
            (two days)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
