// import { Carousel } from "../Carousel/Carousel";
// import "../Carousel/carousel.css";
import { useState } from "react";
import styles from "./Carousel.module.css";

function Home() {
  //   return <Carousel />;
  return (
    <div>
      <Carousel />
      {/* update home address direct link */}
      <div class='floater-box'>
        <a href='employeePortalSub3.html'>
          Click Here to Update Your Home Address!
        </a>
      </div>
      {/* quick links */}
      <div class='quicklinks-container'>
        <a
          href='employeePortal.html'
          class='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486), url('images/white-sands-5075995_960_720.jpg')`,
          }}
        >
          Employee Resources
        </a>
        <a
          href='employerResources.html'
          class='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486),
            url('images/new-mexico-2499015_960_720.jpg')`,
          }}
        >
          Employer Resources
        </a>
        <a
          href='benefitsInformation.html'
          class='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486),
            url('images/pic3.jpg')`,
          }}
        >
          Benefits Plan Information
        </a>
        <a
          href='documents/Emply_Trifold_6_28_7_18.pdf'
          class='btn btn-primary quicklink'
          style={{
            backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486),
            url('images/pic4.jpg')`,
          }}
        >
          Benefits at a Glance
        </a>
      </div>
      {/* about us */}
      <div id='aboutUs' class='mt-5'>
        <img
          class='img-fluid'
          src='images/carrie-borden-BkJGgpSY0JA-unsplash.jpg'
          alt='white sands'
        />
        <div class='text-content py-5'>
          <div class='d-flex align-items-center gap-3'>
            <img
              src='images/ebbhands.png'
              alt='EBB logo'
              style={{ maxHeight: "89px" }}
            />
            <h3 class='display-5 my-3'>About Us</h3>
          </div>
          <p class='my-4'>
            Welcome to the State of New Mexico's Employee Benefits Website. We
            offer competitive, comprehensive medical, dental, vision,
            pharmaceutical, Employee Assistance Program, basic and supplemental
            life insurance, flexible spending accounts, and disability benefits
            to enhance the lives of our employees and their qualified family
            members.
          </p>
          <p class='lead'>
            Employee Benefits Bureau &mdash; Providing the employees of the
            State of New Mexico and participating Local Public Bodies the tools
            to live a happier, healthier life.
          </p>
        </div>
      </div>
    </div>
  );
}

// put carousel stuff here for now
const Carousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      //keep idx from going below 0
      newIndex = 0;
    } else if (newIndex >= items.length) {
      // keep idx from going beyond the length of items array
      newIndex = items.length - 1;
    }
    setActiveIdx(newIndex);
  };

  return (
    <div className={styles.App}>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <div
            className={styles.inner}
            style={{ transform: `translate(-${activeIdx * 100}%)` }}
          >
            {items.map((item, index) => (
              <CarouselItem key={index} item={item} />
            ))}
          </div>
          <div className={styles.carouselButtons}>
            <button
              onClick={() => {
                updateIndex(activeIdx - 1);
              }}
              className={styles.buttonArrow}
            >
              <span className={`material-symbols-outlined`}>
                arrow_back_ios
              </span>
            </button>
            <div className={styles.indicators}>
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    updateIndex(index);
                  }}
                  className={styles.indicatorButtons}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIdx
                        ? styles.indicatorSymbolActive
                        : styles.indicatorSymbol
                    }`}
                  >
                    radio_button_checked
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                updateIndex(activeIdx + 1);
              }}
              className={styles.buttonArrow}
            >
              <span className='material-symbols-outlined'>
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
        <div className={styles.verticalList}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.listItem} ${
                index === activeIdx ? styles.listItemActive : ""
              }`}
              onClick={() => updateIndex(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// news items
const items = [
  {
    title: "Open Enrollment for Plan Year 2024",

    image: require("../Media/banner10.png"),
    link: "openEnrollment.html",
  },
  {
    title: "LPB Premium Rates for January 1, 2024",

    image: require("../Media/balloon-fiesta.jpg"),
    link: "https://google.com/",
  },
  {
    title: "Newsletters and Updates",

    image: require("../Media/tim-mossholder-H6eaxcGNQbU-unsplash.jpg"),
    link: "modal",
  },
  {
    title: "Stay Well Health Center by Proactive MD",

    image: require("../Media/rainbow.jpg"),
    link: "https://healthcenters.proactive-md.com/state-of-new-mexico/stay-well-health-center-santa-fe/",
  },
  {
    title: "Virta and Omada Virtual Care",

    image: require("../Media/national-cancer-institute-L8tWZT4CcVQ-unsplash.jpg"),
    link: "modal",
  },
  {
    title: "COVID Vaccination Helpful Resources",

    image: require("../Media/sam-moghadam-khamseh-2rrsfMN4hn8-unsplash.jpg"),
    link: "modal",
  },
  {
    title: "Medical Providers Tier 1 and Tier 2 Networks",

    image: require("../Media/bret-kavanaugh-MIfUp3FA5ek-unsplash.jpg"),
    link: "https://nmpsia.com/",
  },
  {
    title: "SONM Health and Wellness Initiative",

    image: require("../Media/luke-porter-NEqEC7qa9FM-unsplash.png"),
    link: "healthwellness.html",
  },
];

const CarouselItem = ({ item }) => {
  const gradientOverlay = {
    backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486), url(${item.image})`,
    backgroundSize: "cover",
    paddingLeft: "4px",
  };

  return (
    <div className={styles.carouselItem} style={gradientOverlay}>
      {/* <div></div> */}
      <div>
        <h4>{item.title}</h4>
        <div className={styles.carouselItemText}>{`${
          item.description ? item.description : ""
        }`}</div>
        <a href={item.link} className={`${styles.btn} ${styles.newsBtn}`}>
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Home;
