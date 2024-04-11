import { Modal, Button } from 'react-bootstrap';
import "./Modal.css";

// components
import Rating from './rating';

const FeedbackModal = (props) => {
    const { showModal, setShowModal } = props;

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.feedbackAnswer.value);
        console.log(e.target.rating.value + ' stars');
        // Handle feedback submission
        setShowModal(false);
    };

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Share Your Feedback</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleFeedbackSubmit}>
                    <div className="mb-3">
                        <div style={{ fontWeight: 500 }}>Rate your Experience</div>
                        <Rating />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            id="feedbackAnswer"
                            rows="3"
                            placeholder="Enter your feedback"
                            required
                        ></textarea>
                    </div>
                    <Button className="submit-btn" type="submit">Submit</Button>
                </form>
            </Modal.Body>
        </Modal>
    )
};

export default FeedbackModal;