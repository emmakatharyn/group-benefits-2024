import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    

<footer id="contactSection">


<div class="container erisa-credits">
  <div class="d-flex gap-3">
    <Link to='/home' className="d-flex align-items-center">
      <img src='images/NM_SEAL_V3.png' className="footer-credit-logo"alt='State Of New Mexico Group logo' />
      <span className="footer-credit-text ms-2">
        State Of New Mexico Group Benefits Plan
      </span>
    </Link>
    <Link to="https://www.hsd.state.nm.us/" className="hca d-flex align-items-center" target="_blank">
      <img src="/images/HCA_Transparent_Logo_for_Dark_Theme.png" className="footer-credit-logo" alt="HCA Logo" />
      <span className="footer-credit-text ms-2">
        State Health Benefits is a division of the New Mexico Health
        Care
        Authority (HCA)
      </span>
    </Link>
  </div>
  <div class="easi d-flex gap-3">
    <Link to='/benefits-info'>
      <img src='images/EASI_Transparent_Logo_for_Dark_Theme.png' width='118' alt='Erisa logo' />
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
