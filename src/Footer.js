import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='container erisa-credits'>
        <Link to='/home'>
          <img src='images/logo.png' alt='State Of New Mexico Group logo' />
          State Of New Mexico Group Benefits Plan
        </Link>
        <div className='easi'>
          <Link to='/benefits-info'>
            <img src='images/easi.png' width='118' alt='Erisa logo' />
          </Link>
          <Link to='https://www.erisa-trust.com/' target='_blank'>
            <img
              src='images/tree.png'
              width='72'
              alt='Erisa trust company logo'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
