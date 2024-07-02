import { useState } from "react";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";

// news items for Carousel
const items = [
  {
    title: "Wellness Pulse Check Survey",
    image: require("../Media/banner10.png"),
    link: "/open-enrollment",
    // description:
    // this causes problems hmmmmmmmmmmmmmmmmmmm this is where i left off
    //sonofabitch
    //   "EBB wants your feedback on some stuff and this said somethin else too but i forgot... it doesnt matter, i just wanna see what this looks like ahahah",
  },
  {
    title: "LPB Premium Rates for January 1, 2024",
    image: require("../Media/balloon-fiesta.jpg"),
    link: "/lpb-employees/premium-rates",
  },
  {
    title: "Newsletters and Updates",
    image: require("../Media/tim-mossholder-H6eaxcGNQbU-unsplash.jpg"),
    link: "/news",
  },
  {
    title: "No Cost VirtualCheckup by Catapult Health",
    image: require("../Media/rainbow.jpg"),
    link: "/documents/State of New Mexico - VC (Tasso) - Registration Poster.pdf",
  },
  {
    title: "Health Care Authority Notification to Payors",
    image: require("../Media/rainbow.jpg"),
    link: "/documents/GSD_EBB_HCA_SHB_Notification_to_Payors.pdf",
  },
  {
    title: "Virta and Omada Virtual Care",
    image: require("../Media/national-cancer-institute-L8tWZT4CcVQ-unsplash.jpg"),
    link: "/virta-and-omada",
  },
  {
    title: "COVID Vaccination Helpful Resources",
    image: require("../Media/sam-moghadam-khamseh-2rrsfMN4hn8-unsplash.jpg"),
    link: "/covid",
  },
  {
    title: "Medical Providers Tier 1 and Tier 2 Networks",
    image: require("../Media/bret-kavanaugh-MIfUp3FA5ek-unsplash.jpg"),
    // this one has TWO links. hmm. maybe link it to a single "page" that has these two links and a blurb or something
    link: "https://www.bcbsnm.com/sonm/doctors-and-hospitals",
    // link: "https://www.phs.org/health-plans/employer-plans/state-of-new-mexico"
  },
  {
    title: "Presbyterian Fitness Pass Membership",
    image: require("../Media/luke-porter-NEqEC7qa9FM-unsplash.png"),
    link: "/documents/PHS_IBAC_Fitness_Pass_Flyer_PQ_2024.pdf",
  },
];

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

const CarouselItem = ({ item }) => {
  const gradientOverlay = {
    backgroundImage: `linear-gradient(45deg, #1d1e53af, #2d46b486), url(${item.image})`,
    backgroundSize: "cover",
    paddingLeft: "4px",
  };

  return (
    <div className={styles.carouselItem} style={gradientOverlay}>
      <div>
        <h4>{item.title}</h4>
        <div className={item.description && styles.carouselItemText}>{`${
          item.description ? item.description : ""
        }`}</div>
        <Link to={item.link} className={`${styles.btn} ${styles.newsBtn}`}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
