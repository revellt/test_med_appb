import React, { useState } from 'react';
import "./ReviewForm.css";

function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      setSubmittedMessage(formData);
      setFormData({
        name: '',
        review: '',
        rating: 0
      });
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label>Rating:</label>
            <div className="rating-selector">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className={`star ${formData.rating >= num ? 'filled' : ''}`}
                  onClick={() => handleRatingChange(num)}
                >
                  ★
                </span>
              ))}
              <input
                type="number"
                min="1"
                max="5"
                value={formData.rating}
                onChange={(e) => handleRatingChange(Number(e.target.value))}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>Name: {submittedMessage.name}</p>
          <p>Review: {submittedMessage.review}</p>
          <p>Rating: {submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
