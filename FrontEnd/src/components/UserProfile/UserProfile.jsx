import "./UserProfile.css";
import proimg from "./noprofil.jpg";

function UserProfile() {
  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-container">
        <img
          src={proimg}
          alt="profile_pic"
          className="profile-container-proimg"
        />
      </div>
      <br />
      <div className="edit">
        <button className="edit-button">Edit</button>
      </div>
      <div className="details">
        <br />
        <div className="user-id">
          <h3>User Id</h3>
          <div className="id">
            <h4>5445</h4>
          </div>
        </div>
        <br />
        <div className="user-name">
          <h3>User Name</h3>
          <div className="name">
            <h4>jaya</h4>
          </div>
        </div>
        <br />
        <div className="e-mail">
          <h3>E-mail</h3>
          <div className="mail">
            <h4>jayasurya123@gmail.com</h4>
          </div>
        </div>
        <br />
        <div className="password">
          <h3>Password</h3>
          <div className="pass">
            <h4>sece#321</h4>
          </div>
        </div>
        <br />
        <div className="phone-no">
          <h3>Phone No</h3>
          <div className="number">
            <h4>9360340528</h4>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default UserProfile;
