import React from "react";
import logoImage from "../assets/img/logo-macuve.svg";
import iconGmail from "../assets/img/gmail-icon.svg";
import iconAppel from "../assets/img/appel-icon.svg";
import iconFacebook from "../assets/img/facebook-icon.svg";
import iconTwitter from "../assets/img/twitter-icon.svg";
const Home = () => {
  return (
    <div className="login-page">
      <div className="logo-top">
        <img src={logoImage} alt="Macuvee" />
      </div>
      <p>Transformez vos bouteilles !</p>
      <div className="actions-login">
        <button className="btn btn-dark mb-3">
          <img src={iconGmail} alt="Macuvee" className="mr-3" />
          <span>Continue with Google</span>
        </button>
        <button className="btn btn-dark mb-3">
          <img src={iconAppel} alt="Macuvee" className="mr-3" />
          <span>Continue with Apple</span>
        </button>
        <button className="btn btn-dark mb-3">
          <img src={iconFacebook} alt="Macuvee" className="mr-3" />
          <span>Continue with Facebook</span>
        </button>
        <button className="btn btn-dark mb-3">
          <img src={iconTwitter} alt="Macuvee" className="mr-3" />
          <span>Continue with Twitter</span>
        </button>

        <button className='btn btn-primary mt-4' >Inscription</button>
        <div className="account-box">
            <a href="#">Don’t have an account?</a>
            <a href="#" className="active">Sign up</a>
        </div>
      </div>
    </div>
  );
};
export default Home;
