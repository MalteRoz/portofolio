import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <p>This page can not be found!</p>
        <Link to={"/"}>Go back to home</Link>
      </div>
    </>
  );
};

export default NotFound;
