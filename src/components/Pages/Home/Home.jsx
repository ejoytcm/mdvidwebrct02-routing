import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {

  const history = useHistory();
  const navigateToAbout = () => {
    history.push("/about");
  }
  
  return (
    <div className="py-5 mh-75vh mt-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h6 className="display-6 fw-bold mb-4">Welcome to Dev Community</h6>
            <p className="fs-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              ex nibh. Curabitur placerat dignissim dui, et blandit ipsum
              accumsan at. Aliquam erat volutpat. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Mauris ut risus nulla. Praesent vehicula interdum sagittis. Fusce
              ut libero scelerisque, volutpat urna a, dictum nibh. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla libero velit,
              faucibus eu nibh viverra, condimentum iaculis ipsum.
            </p>
            <button className="btn btn-secondary btn-lg" onClick={navigateToAbout}>
              Explore about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
