import React from "react";
import { useHistory } from "react-router-dom";
import cards from "../../../data/cards";

const About = () => {

  const history = useHistory();

  const navigateToDetails = cardId => {
    history.push(`/about/${cardId}`);
  }

  return (
    <div className="pt-4 mt-5 mh-75vh">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          {cards.map((card) => (
            <div className="col-lg-6 col-md-6 col-xxl-4 mb-5" 
                key={card.id}
                onClick={() => navigateToDetails(card.id)}>
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-secondary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className={card.iconClass}></i>
                  </div>
                  <h2 className="fs-5 fw-bold mb-3">{card.title}</h2>
                  <p className="mb-0">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
