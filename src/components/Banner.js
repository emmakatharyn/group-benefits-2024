import { Link } from "react-router-dom";

function Banner({ selectedCarrier }) {
  const { linkName, url, imgSrc } = selectedCarrier.content.banner[0];
  return (
    <Link to={url} className='modal-banner-link'>
      <img src={imgSrc} alt={linkName} className='modal-banner-img' />
    </Link>
  );
}

export default Banner;
