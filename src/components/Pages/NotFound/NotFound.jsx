import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <div className="py-5 mh-75vh mt-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h6 className="display-6 fw-bold mb-4">Opps! Page not found</h6>
            <Link className="btn btn-secondary btn-lg" to="/home">
              Go to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
