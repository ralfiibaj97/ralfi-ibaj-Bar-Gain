import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBarForm.scss";


const AddBarForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formFields = [
      e.target["bar-name"],
      e.target.address,
      e.target.zipcode,
      e.target.image_url,
    ];

    let isValid = true;

    formFields.forEach((field) => {
      if (!field.value) {
        field.classList.add("bar-form__input--error");
        isValid = false;
      } else {
        field.classList.remove("bar-form__input--error");
      }
    });

    if (!isValid) {
      alert("Please fill in ALL the fields.");
      return;
    }

    const barData = {
      name: e.target["bar-name"].value,
      address: e.target.address.value,
      zipcode: e.target.zipcode.value,
      image_url: e.target.image_url.value,
    };

    try {
      const res = await axios.post("http://localhost:8080/bars", barData);

      if (res.status === 201) {
        const newBarId = res.data.id;
        alert("Bar added successfully!");
        navigate(`/bars/${newBarId}/add-happy-hour`);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error adding bar:", error);
      alert("Error adding bar. Please check the inputs and try again.");
    }
  };

  return (
    <section className="bar-form">
      <div className="bar-form__header">
        <h1 className="bar-form__title">Add New Bar</h1>
      </div>
      <form onSubmit={handleSubmit} className="bar-form__body">
        <div className="bar-form__section bar-form__section--details">
          <h2 className="bar-form__section-title">Bar Details</h2>

          <div className="bar-form__field">
            <label className="bar-form__label">Bar Name</label>
            <input
              type="text"
              name="bar-name"
              placeholder="Bar Name"
              className="bar-form__input"
              required
            />
          </div>

          <div className="bar-form__field">
            <label className="bar-form__label">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="bar-form__input"
              required
            />
          </div>

          <div className="bar-form__field">
            <label className="bar-form__label">Zip Code</label>
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              className="bar-form__input"
              required
            />
          </div>

          <div className="bar-form__field">
            <label className="bar-form__label">Image URL</label>
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              className="bar-form__input"
              required
            />
          </div>
        </div>

        <div className="bar-form__actions">
          <button
            type="button"
            className="bar-form__button bar-form__button--cancel"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bar-form__button bar-form__button--add"
          >
            + Add Bar
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBarForm;
