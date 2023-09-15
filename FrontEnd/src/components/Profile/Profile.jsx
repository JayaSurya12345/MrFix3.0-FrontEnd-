import React from "react";

import proimg from "./noprofil.jpg";
import "./Profile.css";
import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const[username,setUserName]=useState(); 
  const saveProfile=async()=>{
    try {
      console.log(userData.name+'name:');
      setUserName(userData.name);
      Cookies.set("username", userData.name);
      const response = await fetch("http://localhost:5000/user/profile/update", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
   
      const result = await response.json();
      console.log("Success:", result,userData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const getProfile=async()=>{
         
         await fetch('http://localhost:5000/user/profile/'+username, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // Allow requests from any origin (replace * with your specific origin if needed)
          }
        })
        
          .then(response => response.json())
          .then( data => {
            // Process the response data here
            console.log("printing",data);
      
            // Update the events state with the new data
            setUserData(data);
            Cookies.set("username", data.name);
           // events.push(data);
            console.log("userprofile",userData);
          })
          .catch(error => {
            console.error('Error:', error);
          });}
  
     useEffect(()=>{
      const savedUsername = Cookies.get("username");
      console.log(savedUsername+"cook");
      if (savedUsername) {
        setUserName(savedUsername);
      }
      console.log('Profile useEffect - username:', username);
      console.log('Profile useEffect - userData:', userData);
      getProfile();
      console.log("profile api called printing data", userData, username);
     },[username]);
  const [editable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    saveProfile();
    setEditable(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUserName(value);
  };
  
  return (
    <div>
      <h1>Profile</h1>
      <div className="whole-container">
        <div className="profile-left">
          <div className="profile-container">
            <img
              src={proimg}
              alt="profile_pic"
              className="profile-container-proimg"
            />
          </div>
          <br />
          <div className="edit">
            {editable ? (
              <button className="edit-button" onClick={handleSaveClick}>
                Save
              </button>
            ) : (
              <button className="edit-button" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </div>
        </div>
        <div className="details-right">
          <div className="details">
            <br />
            <div className="user-pro">
              <h3>User Id</h3>
              <div className="id">
                {editable ? (
                  <input
                    type="text"
                    id="userId"
                    name="_id"
                    value={userData._id}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData._id}</span>
                )}
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>User Name</h3>
              <div className="name">
                {editable ? (
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.name}</span>
                )}
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>E-mail</h3>
              <div className="mail">
                {editable ? (
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.email}</span>
                )}
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>Password</h3>
              <div className="pass">
                {editable ? (
                  <input
                    type="password"
                    id="password"
                    name="userpass"
                    value={userData.userpass}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.userpass}</span>
                )}
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>Phone No</h3>
              <div className="number">
                {editable ? (
                  <input
                    type="text"
                    id="phoneNo"
                    name="contact"
                    value={userData.contact}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.contact}</span>
                )}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
//
///dsgdsgsdgdsgscs

export default Profile;
// fdjhvfkjvjfvhfhgkhvhbg