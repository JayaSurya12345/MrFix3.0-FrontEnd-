import React from "react";

import "./HistoryItem.css";

const HistoryItem = () => {
  return (
    <div>
      <div className="history-item">
        <div className="history-pic">
          <img
            className="history-pic-img"
            src="https://eventmie.classiebit.com/storage/events/September2019/15686248018mQMFJLY59.jpg"
            alt="no image1"
          />
        </div>
        <div className="history-content">
          <div className="history-content-date">
            <h4>
              <b>7 th May 2023</b>
            </h4>
          </div>
          <div className="history-content-description">
            <p>
              Here's an Web Dev event that which excites you to participate and
              win Cash prize which is worth ₹ 10,000 and Certificates will be
              provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
