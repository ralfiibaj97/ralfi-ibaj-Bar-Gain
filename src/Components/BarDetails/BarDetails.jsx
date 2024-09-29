import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteModal from "../DeleteBarModal/DeleteModal";

import "./BarDetails.scss";

const BarDetails = () => {
  const { barId } = useParams();
  const [bar, setBar] = useState(null);
  const [happyHours, setHappyHours] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); 

  useEffect(() => {
    const getBarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/bars/${barId}`);
        setBar(response.data.bar);
        setHappyHours(response.data.happyHours);
      } catch (error) {
        console.error("Failed to receive bar details:", error);
      }
    };

    getBarDetails();
  }, [barId]);

  if (bar === null) {
    return <div>Loading...</div>;
  }

  const openDeleteModal = () => {
    setShowDeleteModal(true);  
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);  
  };

  return (
    <section className="bar-details">
      <div className="bar-details__container">
        <div className="bar-details__heading">
          <h1 className="bar-details__title">{bar.name}</h1>
          <p className="bar-details__address">{bar.address}</p>
          <img
            className="bar-details__image"
            src={bar.image_url}
            alt={`${bar.name} Image`}
          />
        </div>

        <div className="bar-details__info">
          <h2 className="bar-details__info-title">Happy Hours</h2>

          {happyHours.map((happyHour) => (
            <div key={happyHour.id} className="bar-details__happyhour">
              <p>Start Time: {happyHour.start_time}</p>
              <p>End Time:{happyHour.end_time}</p>
              <p>Description: {happyHour.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="bar-details__delete-button" onClick={openDeleteModal}>
          Delete Bar
        </button>

        {showDeleteModal && (
          <DeleteModal onClose={closeDeleteModal} />
        )}

    </section>
  );
};

export default BarDetails;
