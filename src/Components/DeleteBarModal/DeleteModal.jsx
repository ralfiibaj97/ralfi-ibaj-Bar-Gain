import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DeleteModal.scss";

const DeleteModal = ({ onClose }) => {
  const { barId } = useParams();  
  const navigate = useNavigate();

  const deleteBar = async () => {
    try {
      await axios.delete(`http://localhost:8080/bars/${barId}`); 
      alert("Bar deleted successfully");
      navigate("/");  
    } catch (error) {
      console.error("Error deleting bar:", error);
    }
  };

  return (
    <div className="delete-modal__overlay">
      <div className="delete-modal">
        <button className="delete-modal__close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="delete-modal__title">Delete Bar?</h2>
        <p className="delete-modal__message">
          Please confirm that you'd like to delete this bar from the list. You won't be able to undo this action.
        </p>
        <div className="delete-modal__buttons">
          <button className="delete-modal__cancel-button" onClick={onClose}>Cancel</button>
          <button className="delete-modal__delete-button" onClick={deleteBar}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
