import React from "react";
import "./MainDash.css";
import EventInfo from "../EventInfo/EventInfo";
import { useNavigate } from "react-router";

const MainDash = () => {
  const navigate=useNavigate();
  const openManageEvent=()=>{
    return (
         navigate('/manage')
    )
  }
  return (
    <div className="MainDash">
      <div className="manage-events">
        <button className="manage-events-button" onClick={openManageEvent}>Manage Events</button>
      </div>
      <div className="event-list">
        <EventInfo />
        <EventInfo />
        <EventInfo />
      </div>
      <div className=""></div>
    </div>
  );
};

export default MainDash;
