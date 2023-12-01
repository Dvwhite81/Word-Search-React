import { useState } from 'react';
import './Modal.css';

function Modal({ words, closeModal }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div id="myModal">
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <div id="modal-content">
        {confirmed ? (
          <ul>
            {words.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        ) : (
          <div id="confirm-show">
            <h2>Are you sure?</h2>
            <button
              id="confirm-show-btn"
              className="btn"
              type="submit"
              onClick={() => setConfirmed(true)}
            >
              Yes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
