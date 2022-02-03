import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <img src="/sadFace.svg" alt="404" className="notFoundPhoto" />
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">
        <button className="homePageButton">Home Page</button>
      </Link>
    </div>
  );
};

export default NotFound;
