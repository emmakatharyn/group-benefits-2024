import { Link } from "react-router-dom";

function Banner({ selectedCarrier }) {
  const { linkName, url, imgSrc } = selectedCarrier.content.banner[0];
  return (
    <Link to={url}>
      <img src={imgSrc} alt={linkName} />
    </Link>
  );
}

export default Banner;
