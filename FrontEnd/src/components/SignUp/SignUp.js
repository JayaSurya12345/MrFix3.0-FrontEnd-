import "./SignUp.css";

//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const notify = () => {
    // toast.success("SignedUp Successfully!.");
  };

  return (
    <div>
      <div className="title-wrapper">
        <div className="title-name">EventZa</div>
      </div>

      <div className="signin">
        <form>
          <br />
          <h1>SignUp</h1>

          <label className="label-name">Name</label>

          <input type="text" className="input-name" placeholder="name"></input>
          <br />
          <br />

          <label className="label-email">Email ID</label>

          <input
            type="email"
            className="input-email"
            placeholder="e-mail id"
          ></input>
          <br />
          <br />

          <label className="label-create-password">Create Password</label>

          <input
            type="password"
            className="create-input-password"
            placeholder="enter password"
          ></input>
          <br />
          <br />

          <label className="label-confirm-password">Confirm Password</label>

          <input
            type="password"
            className="confirm-input-password"
            placeholder="Re-enter password"
          ></input>
          <br />
          <br />

          <button className="signup-button" onClick={notify}>
            SignUp
          </button>

          <p>
            Already have an account?{" "}
            <a href="link" className="login-link">
              Login
            </a>
          </p>
          <br />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Open+Sans"
          />

          <p className="or">
            <span>or</span>
          </p>

          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google"
              />
            </div>
            <p class="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default SignUp;