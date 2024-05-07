import React from "react";

import Carousel from "./Carousel";
// import "../Carousel/carousel.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Carousel />
      {/* update home address direct link */}
      <div className='slide-in-link'>
        <Link to='/share'>Click Here to Update Your Home Address!</Link>
      </div>
      {/* quick links */}
      <div className='quicklinks-container'>
        <Link
          to='/employees'
          className='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486), url('images/white-sands-5075995_960_720.jpg')`,
          }}
        >
          Employee Resources
        </Link>
        <Link
          to='/employers'
          className='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486),
            url('images/new-mexico-2499015_960_720.jpg')`,
          }}
        >
          Employer Resources
        </Link>
        <Link
          to='/benefits-info'
          className='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486),
            url('images/pic3.jpg')`,
          }}
        >
          Benefits Plan Information
        </Link>
        <Link
          to='documents/Emply_Trifold_6_28_7_18.pdf'
          target='_blank'
          className='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486),
            url('images/pic4.jpg')`,
          }}
        >
          Benefits at a Glance
        </Link>
      </div>
      {/* about us */}
      <div id='aboutUs' className='mt-5'>
        <img
          className='img-fluid'
          src='images/carrie-borden-BkJGgpSY0JA-unsplash.jpg'
          alt='white sands'
        />
        <div className='text-content py-5'>
          <div className='d-flex align-items-center gap-3'>
            <img
              src='images/ebbhands.png'
              alt='EBB logo'
              style={{ maxHeight: "89px" }}
            />
            <h3 className='display-5 my-3'>About Us</h3>
          </div>
          <p className='my-4'>
            Welcome to the State of New Mexico's Employee Benefits Website. We
            offer competitive, comprehensive medical, dental, vision,
            pharmaceutical, Employee Assistance Program, basic and supplemental
            life insurance, flexible spending accounts, and disability benefits
            to enhance the lives of our employees and their qualified family
            members.
          </p>
          <p className='lead'>
            Employee Benefits Bureau &mdash; Providing the employees of the
            State of New Mexico and participating Local Public Bodies the tools
            to live a happier, healthier life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
