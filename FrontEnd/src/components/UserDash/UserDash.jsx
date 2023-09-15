import React from "react";
import EventInfo from "../EventInfo/EventInfo";

const UserDash = () => {
  return (
    <div className="UserDash">
      <div className="event-list">
        <EventInfo/>
        <EventInfo />
        <EventInfo />
      </div>
    </div>
  );
};

export default UserDash;
