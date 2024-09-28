import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BarDetails = () => {
  const { barId } = useParams();
  const [bar, setBar] = useState(null);
  const [happyHours, setHappyHours] = useState(null);

  useEffect(() => {
    const fetchBar = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/bars/${barId}`);
        setBar(response.data);
        setHappyHours(response.data.happyHours);
      } catch (error) {
        console.error("Failed to fetch bar details:", error);
      }
    };

    fetchBar();
  }, [barId]);

  return (
    <div className="bar-details">
      {bar ? (
        <>
          <h1>{bar.name}</h1>
          <p>{bar.address}</p>
          {happyHours ? (
            <div>
              <h2>Happy Hours</h2>
              <p>Start Time: {happyHours.start_time}</p>
              <p>End Time: {happyHours.end_time}</p>
              <p>Description: {happyHours.description}</p>
            </div>
          ) : (
            <Link to={`/bars/${barId}/add-happy-hour`}>
              <button>+ Add Happy Hour</button>
            </Link>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarDetails;
