import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const SearchList=()=>{
    const location=useLocation();
    const title=location.state.name;
    const [events, setEvent] = useState([]);
    const getSpecifiedEvents = async(newObj) => {
        await fetch("http://localhost:5000/events/"+title, {
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
           setEvent(data);
          // events.push(data);
           console.log("events",events);
         })
         .catch(error => {
           console.error('Error:', error);
         });}
       useEffect(()=>{
        getSpecifiedEvents();
       },[]);
    return(
        <>
         <p>
            {JSON.stringify(events[0])}
         </p>
        </>
    )
}
export default SearchList