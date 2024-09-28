import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddHappyHourForm = () => {
  const navigate = useNavigate();
  const { barId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const start_time = e.target.start_time.value;
    const end_time = e.target.end_time.value;
    const description = e.target.description.value;

    try {
      const res = await axios.post(`http://localhost:8080/bars/${barId}/happy-hours`, {
        start_time,
        end_time,
        description
      });

      if (res.status === 201) {
        alert("Happy Hour added successfully!");
        navigate(`/bars/${barId}`);
      }
    } catch (error) {
      alert("Error adding happy hour. Please check the inputs and try again.");
    }
  };

  return (
    <section className="bar-form">
      <div className="bar-form__header">
        <h1 className="bar-form__title">Add New Happy Hour</h1>
      </div>
      <form onSubmit={handleSubmit} className="bar-form__body">
        <div className="bar-form__section">
          <div className="bar-form__field">
            <label className="bar-form__label">Start Time</label>
            <input type="text" name="start_time" placeholder="Start Time" className="bar-form__input" />
          </div>
          <div className="bar-form__field">
            <label className="bar-form__label">End Time</label>
            <input type="text" name="end_time" placeholder="End Time" className="bar-form__input" />
          </div>
          <div className="bar-form__field">
            <label className="bar-form__label">Description</label>
            <input type="text" name="description" placeholder="Description" className="bar-form__input" />
          </div>
        </div>
        <div className="bar-form__actions">
          <button type="submit" className="bar-form__button bar-form__button--add">+ Add Happy Hour</button>
        </div>
      </form>
    </section>
  );
};

export default AddHappyHourForm;
