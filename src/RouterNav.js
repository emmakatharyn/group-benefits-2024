// import { pagesComponents } from "./routerRoot";
import { Link, NavLink } from "react-router-dom";

import "./App.css";

export default function RouterNav() {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler ms-auto'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='home'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='employees'>
                Employee Resources
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='employers'>
                Employer Resources
              </NavLink>
            </li>
            <li className='nav-item'>
              <Link
                to='https://healthcenters.proactive-md.com/state-of-new-mexico/stay-well-health-center-santa-fe/'
                className='nav-link'
                target='_blank'
                rel='noreferrer'
              >
                Stay Well Health Center
              </Link>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='enrollment'>
                Enroll Here
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='contact'>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
