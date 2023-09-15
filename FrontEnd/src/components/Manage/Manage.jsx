import React from 'react'
import './Manage.css'

import Close from "./Close.png";
import eventImage from "./noprofil.jpg";
import { useState, useEffect} from 'react';


const Manage = () => {
 
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [eventsVisible, setEventsVisible] =useState(false);
  const [displaySearchResult, setDisplaySearchResult]=useState(false);
  const [searchval,setSeacrh]=useState([]);
  const[events,setEvents]=useState([]);
  const [images, setImages] = useState([]) ;
  const [imageURLs, setImageURLs] = useState([]) ;
  const [eventInput, setEventInput] = useState({
    title: '',
    date: '',
    des: ''
  });
    useEffect ( () => {
    if (images. length < 1) return;
    const newImageUrls = [];
    images. forEach (image => newImageUrls.push (URL. createObjectURL (image) )) ;
    setImageURLs (newImageUrls);
     }, [images]);

    function onImageChange (e) {
    setImages ([...e.target.files]);
    }
    const addEvents=async()=>{
      setEvents((prevEvents) => {
        const eventToUpdate = prevEvents.find((event) => event.title === eventInput.title);
  
        if (eventToUpdate) {
          // If the event exists, update its property
          return prevEvents.map((event) =>
            event.title === eventInput.title ? { ...event, ...eventInput } : event
          );
        } else {
          // If the event doesn't exist, add a new event to the array
          return [...prevEvents, eventInput];
        }
      });
  
      // Reset the eventInput state after adding/updating an event
      setEventInput({
        title: '',
        date: '',
        des: ''
      });
      try {
        const response = await fetch("http://localhost:5000/events/register", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventInput),
        });
        setPopupVisible(false)
        const result = await response.json();
        console.log("Success:", result);
        console.log("eexecuted setpopup");
      } catch (error) {
        console.error("Error:", error);
      }
      console.log(events);
    }
    const getevents = async(newObj) => {
      await fetch('http://localhost:5000/events/viewevents')
       .then(response => response.json())
       .then(data => {

         // Process the response data here
         console.log("printing",data);     
         // Update the events state with the new data
         setEvents(data);
        // events.push(data);
         //console.log("events",events);
       })
       .catch(error => {
         console.error('Error:', error);
       });} //Process the response data here
      
 
       const getSpecifiedEvents = async(newObj) => {
        console.log("printing searchval ",searchval);
        await fetch("http://localhost:5000/events/"+searchval, {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*' // Allow requests from any origin (replace * with your specific origin if needed)
         }
       })
         .then(response => response.json())
         .then(data => {
           // Process the response data here
           console.log("printing",data);
       
           // Update the events state with the new data
           setEvents(data);
          // events.push(data);
           console.log("events",events);
         })
         .catch(error => {
           console.error('Error:', error);
         });}
 
    const onSearchStore=(e)=>{
      console.log(searchval);
      setSeacrh(e.target.value);
  }
  const handleButtonClick = () => {
   
      setEventsVisible(false)
      setDisplaySearchResult(false)
 
    setPopupVisible(true);
  };

  const handleCloseClick = () => {
    setPopupVisible(false);
  };
  
  const displayEventsClick=()=>{
      getevents();
      setPopupVisible(false);
      setEventsVisible(true);
      setDisplaySearchResult(false);
   
   
  };

  const displaySearchResultClick=()=>{
        getSpecifiedEvents();
        setPopupVisible(false);
        setEventsVisible(false);
        setDisplaySearchResult(true);
  }
  const closeEventsClick=()=>{
     setEventsVisible(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className='header'>
    <div className='overall-wrapper'>
      <div className="events-btn" onClick={displayEventsClick}>
           <div>View All</div>
      </div>
      <div className="events-btn" onClick={handleButtonClick}>
          <div>Add Events</div>
      </div>
      <div className="box">
           <input type="text" placeholder="Search here..."  onChange={onSearchStore} ></input>
          
          <i  onClick={displaySearchResultClick}class="fas fa-search"></i> 
        </div>
    </div>
    <div>
        {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <img
              src={Close}
              alt="Close"
              className="close"
              onClick={handleCloseClick}
            ></img>
            { imageURLs.map (imageSrc => <img src={imageSrc}/>) }
            <input type="file" multiple accept=" image/*" onChange={onImageChange}/>
            <input type="text" placeholder="Event Name" name="title" value={events.title} onChange={handleInputChange}></input>
            <input type="date" placeholder="Date" name="date" value={events.date} onChange={handleInputChange}></input>
            <textarea name="des" value={events.des} placeholder="Description about the event" cols="37" rows="8"  onChange={handleInputChange}></textarea>
             <div className='add-event-btn' onClick={addEvents}>Add Event + </div>
          </div>
        </div>
      )}
      {
        eventsVisible && (
                <div>
                  <div  className='events-list'>
                    {events.map((item,index)=>{
                      return(
                  <div className="feedback-item">
                          <div className="feedback-top">
                            <div className="feedback-username">
                              <h3>{item.title}</h3>
                             </div>
                           <div className="feedback-date">
                     <h5>{item.date}</h5>
                </div>
                </div>
              <div className="feedback-text">
                <h4>
                 {item.des}
                </h4>
              </div>
            </div>
                  )
              })
            }
              </div>
             </div>
        )
      }
      {
        displaySearchResult && (
                <div>
                  <div  className='events-list'>
                    {events.map((item,index)=>{
                      return(
                  <div className="feedback-item">
                          <div className="feedback-top">
                            <div className="feedback-username">
                              <h3>{item.title}</h3>
                             </div>
                           <div className="feedback-date">
                     <h5>{item.date}</h5>
                </div>
                </div>
              <div className="feedback-text">
                <h4>
                 {item.des}
                </h4>
              </div>
            </div>
                  )
              })
            }
              </div>
             </div>
        )
      }
        </div>
    </div>
  )
}

export default Manage