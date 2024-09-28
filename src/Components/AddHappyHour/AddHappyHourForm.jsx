import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./AddHappyHourForm.scss";

const AddHappyHourForm = () => {
  const navigate = useNavigate();
  const { barId } = useParams(); 
  const [formData, setFormData] = useState({
    start_time: "",
    end_time: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitHappyHour = async (e) => {
    e.preventDefault();

    if (!formData.start_time || !formData.end_time || !formData.description) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      await axios.post(`http://localhost:8080/happyhours/${barId}`, formData);
      alert("Happy Hour added successfully!");
      navigate(`/bars/${barId}`);
    } catch (error) {
      console.error("Error while adding happy hour:", error.message);    }
  };

  return (
    <section className="happyhour-form">
      <div className="happyhour-form__header">
        <h1 className="happyhour-form__title">Add New Happy Hour</h1>
      </div>

      <form onSubmit={handleSubmitHappyHour} className="happyhour-form__body">
        <div className="happyhour-form__section">
          <div className="happyhour-form__field">
            <label className="happyhour-form__label">Start Time</label>
            <input
              type="text"
              name="start_time"
              placeholder="Start Time"
              className="happyhour-form__input"
              value={formData.start_time}
              onChange={handleInputChange}
            />
          </div>
          <div className="happyhour-form__field">
            <label className="happyhour-form__label">End Time</label>
            <input
              type="text"
              name="end_time"
              placeholder="End Time"
              className="happyhour-form__input"
              value={formData.end_time}
              onChange={handleInputChange}
            />
          </div>
          <div className="happyhour-form__field">
            <label className="happyhour-form__label">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="happyhour-form__input"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="happyhour-form__actions">
          <button type="submit" className="happyhour-form__button happyhour-form__button--add">
            + Add Happy Hour
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddHappyHourForm;
