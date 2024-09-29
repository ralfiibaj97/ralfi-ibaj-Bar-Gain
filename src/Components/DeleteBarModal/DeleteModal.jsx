import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DeleteModal.css";

const deleteModal = ({ barName, onClose }) => {
    const { barID } = useParams();
    const navigate = useNavigate();

    const deleteBar = async () => { 
        try {
            await axios.delete(`http://localhost:5000/bars/${barID}`);
            alert("Bar deleted successfully");
            navigate("/");
        } catch (error) {
            console.error("Error deleting bar:", error);
        }
};

return (
    <div className="delete-modal__overlay">
        <div className="delete-modal">
            <button className="delete-modal__close-button" onclick={onClose}>
                &times;
            </button>
            <h2 className="delete-modal__title">
                Delete {barName}?
            </h2>
            <p className="delete-modal__message">
            Please confirm that you'd like to delete {barName} from the bar
          list. You won't be able to undo this action.
            </p>
            <div className="delete-modal__buttons">
                <button className="delete-modal__cancel-button" onClick={onClose}>cancel</button>
                <button className="delete-modal__delete-button" onClick={deleteBar}>delete</button>
            </div>
        </div>
    </div>
);
}

export default deleteModal;