import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import cards from "../../../data/cards";

const AboutDetails = () => {

  const params = useParams();
  const history = useHistory();
  const [card, setCard] = useState({});

  useEffect(() => {
    const card = cards.find(card => card.id === params.id);
    if(card) setCard(card)
    else history.push("/about");
  }, [params]);
  return (
    <div className="py-5 mh-75vh mt-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h6 className="display-6 fw-bold mb-4">{card.title}</h6>
            <p className="fs-5 mb-4">{card.description}</p>
            <Link className="btn btn-secondary btn-lg" to="/about">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
