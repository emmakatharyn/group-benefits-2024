import { Link } from "react-router-dom";
function ListBox({ title, links }) {
  return (
    <div className='list-box'>
      <h4 className='my-3 text-start'>{title}</h4>
      <ul>
        {links?.map((link) => (
          <li>
            <i className={`bx ${link.iconClass}`}></i>
            <Link to={link.url}>{link.linkText}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListBox;
