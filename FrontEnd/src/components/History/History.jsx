import React from "react";
import "./History.css";
import { useState } from "react";
import { useEffect } from "react";


const History = () => {
  const [historyList,setHistoryList]=useState([]);
  const getHistories= async(newObj) => {
    await fetch('http://localhost:5000/history/viewall/asvin', {
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
       setHistoryList(data);
      // events.push(data);
       console.log("history of events attendted",historyList);
     })
     .catch(error => {
       console.error('Error:', error);
     });}
   useEffect(()=>{
    console.log("api calling",historyList);
    getHistories();
   },[])
  return (
    <div>
         {historyList.map((item,index)=>{
                      return(
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
                              <b>{item.title}</b>
                            </h4>
                          </div>
                          <div className="history-content-date">
                            <h4>
                              <b>{item.date}</b>
                            </h4>
                          </div>
                          <div className="history-content-description">
                            <p>
                              {item.des}
                            </p>
                          </div>
                        </div>
                      </div>
                  )
              })
            }
    </div>
  );
};

export default History;