import "./FeedbackItem.css";
import React from "react";

const FeedbackItem = () => {
  return (
    <div>
      <div className="feedback-item">
        <div className="feedback-top">
          <div className="feedback-username">
            <h3>Raja</h3>
          </div>
          <div className="feedback-date">
            <h5>Fri Jun 30 2023 10:17:40 (IST)</h5>
          </div>
        </div>
        <div className="feedback-text">
          <h4>
            The website is very user friendy and its a great platform for the
            people who are organizing the events and also for the people who are
            attending the events...Nice work...Keep it up..🥳 !!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
